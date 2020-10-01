import axios from 'axios'
import { BASE_URL } from './config'

export default class APIconnector {
    fetchRecord = async (id) => {
        try {
            const data = await axios({
                method: 'get',
                url: `${BASE_URL}/load`,
                params: {
                    id
                },
                timeout: 10000 //airtable can take a bit
            })
            return data.data
        } catch (error) {
            console.error(error)
            return {}
        }
    }
}