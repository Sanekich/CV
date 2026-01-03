function SectionLabel({ text }) {
    return (
        <div key={text} className="Section animate">
            {text}
        </div>
    );
}

export default SectionLabel;