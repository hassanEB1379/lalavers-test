import React from "react";

interface Props {
    children: React.ReactNode
}

export const MainLayout = ({children}: Props) => {
    return (
        <div style={{maxWidth: 800, margin: 'auto'}}>
            {children}
        </div>
    );
};