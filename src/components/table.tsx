interface Props {
    type: string,
    mean: number[],
    mode: number[],
    median: number[] 
}

export default function Table(props: Props){

    return (
        <table>
            <tr>
                <th>Measure</th>
                {props.mean.map((item, index) => (
                    <th>
                        Class {index+1}
                    </th>
                ))}
            </tr>
            <tr>
                <th>{props.type} Mean</th>
                {
                    props.mean.map(item => <td>{item}</td>)
                }
            </tr>
            <tr>
                <th>{props.type} Median</th>
                {
                    props.median.map(item => <td>{item}</td>)
                }
            </tr>
            <tr>
                <th>{props.type} Mode</th>
                {
                    props.mode.map(item => <td>{item}</td>)
                }
            </tr>
        </table>
    )
} 