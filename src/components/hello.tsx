import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}
export const Hello = (props: HelloProps) => {
    let x: [string, number];
    x = ['hello', 1];
    let any: any;
    any = 'lsadjlajsdkls';
    enum Color { Red=1, Green, Blue }
    let colorName: string = Color[2];
    return (
        <div>
            {colorName}
            {x[0]}
            {any}
            <h1>Hello from  {props.compiler} and {props.framework}!</h1>
        </div>
    );
};