import * as React from 'react';
import Button from './styledComponents/Button';
import Typography from './styledComponents/Typography';
import HeroLayout from './HeroLayout';

const backgroundImage =
    '';

export default function Hero() {
    return (
        <HeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: '#7fc7d9', // Average color of the background image.
                backgroundPosition: 'center',
            }}
        >
            <img
                style={{ display: 'none' }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography color="inherit" align="center" variant="h2" marked="center">
                Upgrade your Crossword Puzzling Experience
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
            >
                Come try the platform for easily generating crossword puzzles in a minute
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/sign-up"
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the Application
            </Typography>
        </HeroLayout>
    );
}