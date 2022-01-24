/// <Reference types="cypress" />

// Acertivas

// checagem de igualdade de variaveis simples;

it('Igualdade', () => {
    const a =1;

    expect(a).equal(1);
    expect(a, 'deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
})


// Verificar se são verdadeiros ou não;

it('Verdadeiros', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null; //a orde dos verbos não altera o resultado de exibição 
    expect(c).to.be.undefined;
})

// Verifica se os Objetos são iguais;

it('Objetos Iguais', () => {
    const objeto = {
        a: 1,
        b: 2
    }

    expect(objeto).equal(objeto)
    expect(objeto).equals(objeto)
    expect(objeto).eq(objeto)
    expect(objeto).to.be.equal(objeto)
    expect(objeto).to.be.deep.equal({a: 1, b: 2 })
    expect(objeto).include({a:1})
    expect(objeto).to.have.property('b',2)
    expect(objeto).to.not.be.empty
    expect({}).to.be.empty
})

// Verificar se array contem elementos

it('Assertivas em Arrays', () => {
    const arr = [1,2,3]

    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect({}).to.be.empty
})

// Verificar os tipos de variaveis

it('Tipos', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'Texto tipo string'

    expect(str).to.be.equals('Texto tipo string')
    expect(str).to.have.length(17)
    expect(str).to.contains('ti')
    expect(str).to.match(/tipo/)
})

it('Numeros', () => {
    const number = 4
    const floatnumber = 5.1234

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
})