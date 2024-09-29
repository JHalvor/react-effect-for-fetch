export default function AdviceSlip({adviceSlip: {advice}}) {
    console.log("in adviceslip", advice)
    return (
        <p>{advice}</p>
    )
}