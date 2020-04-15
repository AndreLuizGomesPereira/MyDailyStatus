// request <> response
import auth0 from '../../lib/auth0'

const login = async(request, response) => {
await auth0.handleLogin(request, response)

    response.send({
        'Nome': 'André Luiz',
        'Idade': '31 anos'
    })
}


export default login