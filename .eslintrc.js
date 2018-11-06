module.exports = {
    extends:[
        'eslint-config-alloy/typescript-react'
    ],
    globals:{
        React: false,
        ReactDOM: false
    },
    rules:{
        'indent': [
                'error',
                4,
                {
                    SwitchCase: 1,
                    flatTernaryExpressions: true
                }
            ]
    }
}