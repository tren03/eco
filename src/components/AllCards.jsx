import OneCard from "./OneCard";

export default function MyComponent() {
    return (
        <div className="bg-image">
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', paddingBottom: '20px' }}>
                <OneCard image={'src/assets/Volunteering-bro.svg'}/>
                <OneCard image={'src/assets/Volunteering-bro.svg'}/>
                <OneCard image={'src/assets/Environmental audit-pana.svg'}/>
            </div>
        </div>
    );
}
