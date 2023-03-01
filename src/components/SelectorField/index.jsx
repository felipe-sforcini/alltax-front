export default function SelectorField({ label, data = [], onChange }) {
    return (
        <div>
            <span>{label}</span>
            <select>
                {data.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}