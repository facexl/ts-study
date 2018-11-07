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

const l: any = console.log;

//js 布尔值 数字 字符串 对象 null undefined
//ts 布尔值 数字 字符串 数组 元祖Tuple 枚举 Any Void Null Undefined Never Object 类型断言

enum Color {
    red,
    green
}

let x: number = 1;

//x = null;

l(x);