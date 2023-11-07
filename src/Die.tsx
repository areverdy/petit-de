import { useCallback, useState } from "react";

const Die = (props: { onRoll: (newValue: number) => void }) => {
    const [value, setValue] = useState(Math.floor(Math.random() * 6 + 1))

    const handleClick = useCallback(
        () => {
            const rand = Math.floor(Math.random() * 6 + 1)
            props.onRoll(rand)
            setValue(rand)
        }
        , []
    )

    return (
        <div onClick={handleClick}>
            <p>Value:{value}</p>
        </div>
    );
};

export default Die;