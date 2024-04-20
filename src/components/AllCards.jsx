import OneCard from "./OneCard";

export default function MyComponent() {
    return (
        <div className="bg-image">
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingBottom: '20px' }}>
                <OneCard
                    imageUrl="src/assets/Volunteering-bro.svg"
                    title="Join our community in creating a more sustainable future for everyone"
                    text="
                    At Ecoyaan, we're your sustainable community, providing insights on climate, policy updates, and lifestyle tips to reduce your environmental footprint."
                    buttonText="About us"
                />
                <OneCard
                    imageUrl="src/assets/Gardening-cuate.svg"
                    title="Carefully curated Eco-friendly products"
                    text="Discover eco-friendly products with positive impacts on the planet and society. Stay tuned for our curated selection of sustainable goods." 
                    buttonText="Get in touch"
                />

                <OneCard
                    imageUrl="src/assets/Environmental audit-pana.svg"
                    title="For businesses that care deeply about sustainability"
                    text="
                    Connect with eco-conscious consumers by showcasing your sustainable business on our platform. Contact us today to join our community of ethical and innovative brands."
                    buttonText="Get in touch"
                />

            </div>
        </div>
    );
}
