// request <> response

const login = async(request, response) => {
    response.send({
        'Nome': 'André Luiz',
        'Idade': '31 anos'
    })
}

export default login