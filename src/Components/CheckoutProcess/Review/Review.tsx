import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useCartContext } from "../../../providers/CartProvider";
import { useUserContext } from "../../../providers/UserProvider";
import { orderSubmitEmailAddress } from "../../../utils/ApiKeys";
import { Product } from "../../../Types/interfaces";

export default function Review() {
  const { cartItems, finalTotal, setCartItems } = useCartContext();
  const { user, order } = useUserContext();
  const addresses = [user.addressLine1, user.city, user.state, user.country, user.zipCode];

  const infoForSeller = [
    { name: "_template_id", value: "table" },
    { name: "Name", value: user.firstName + " " + user.lastName },
    { name: "_subject", value: "Complete Order for Queens Finest Prints!" },
    { name: "_next", value: "http://localhost:3000/upload-image" },
    {
      name: "Email-Address",
      value: user.email,
    },
    {
      name: "Phone-Number",
      value: user.phone,
    },
    { name: "Order-Number", value: order },
    {
      name: "Shipping-Address",
      value: addresses.join(", "),
    },
    {
      name: "Total-Cost",
      value: "$" + finalTotal.toFixed(2),
    },
  ];

  const FormSubmitIoInputs = infoForSeller.map(({ name, value }) => {
    return <input type="hidden" key={name} name={name} value={value} />;
  });

  const productToString = (product: Product) => {
    let result = `Product Name: ${product.name}\n`;
    result += `Quantity: ${product.quantity}\n`;
    if (product.requiredCustomizations) {
      result += "Required Customizations:\n";
      product.requiredCustomizations.forEach((customization) => {
        result += `${customization.name}: ${customization.value}\n`;
      });
    }
    return result;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:5173');
    fetch(orderSubmitEmailAddress, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          // Optionally, reset the form fields after successful submission
          setCartItems([]);
        } else {
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error occurred during form submission:", error);
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems?.map((cartItem) => (
          <ListItem key={cartItem.name} sx={{ py: 1, px: 0 }}>
            <img
              src={cartItem.images[0]}
              style={{
                maxWidth: "60px",
                margin: "0.5rem",
                borderRadius: "10px",
              }}
            />
            <ListItemText primary={cartItem.name} secondary={cartItem.desc} />
            <Typography variant="body2">${cartItem.price.toFixed(2)}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total (including shipping and taxes)" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${finalTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{user.firstName + " " + user.lastName}</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" id="order-number">
            Order Number: #{order}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Please save this number for future reference and for us to use when sending us your
            customizations.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* <form action={orderSubmitEmailAddress} method="POST"> */}
        <form onSubmit={(e) => handleSubmit(e)} method="POST">
          {FormSubmitIoInputs}
          {cartItems.map((product) => {
            return (
              <input
                key={product.id}
                type="hidden"
                name="Product-Ordered"
                value={productToString(product)}
              />
            );
          })}
          <button type="submit">
            <Typography>Upload Images and Personalizations!</Typography>
          </button>
        </form>
      </Grid>
    </React.Fragment>
  );
}
