import React from "react";

export const Footer = () => {
    return (
        <div style={{
            textAlign: "center",
        }}>
            &reg;&nbsp;&copy;&nbsp;{new Date().getFullYear().toString()}&nbsp;Все прова защещены.
        </div>
    )
}
