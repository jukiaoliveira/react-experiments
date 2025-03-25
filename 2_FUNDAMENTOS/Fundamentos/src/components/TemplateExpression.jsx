// 4 - template expression

const TemplateExpression = () => {
    const name = "Júlia";

    const data = {
        age: 25,
        job: "Desenvolvedora"
    }

    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem vinda, {name}!</h3>
            <p>Sua idade é: {data.age} anos e você é uma {data.job}.</p>
        </div>
    );
};

export default TemplateExpression;