import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div>
        <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        textAlign: 'center' // Align the whole footer to center
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom align="center">
              Company
            </Typography>
            <Typography variant="body2" color="text.secondary">
              About us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sell on Ecoyaan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Careers
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom align="center">
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Legal Business Name: Kindkarma E-Retail Private Limited
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1-N-12T-781/1 Sri Krishna Vilasa, Urvastores, Ashoknagar(MR), Mangalore, Dakshina Kannada- 575006, Karnataka, India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Grid container spacing={1} alignItems="center" justifyContent="center">
              <Grid item>
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://www.instagram.com/"
                  color="inherit"
                >
                  <Instagram />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <div className="final-footer" style={{backgroundColor:'black',color:'white',textAlign:"center", padding:'4px',fontSize:'20px'}}>
        © 2023 - 2024, Ecoyaan<sup>TM</sup>

    </div>
    </div>
    
  );
}
