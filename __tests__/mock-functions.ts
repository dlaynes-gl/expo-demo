import axios from 'axios';
import { get_data } from '../src/utils/api';

describe('Mock Functions', function(){
    it('can create mock functions', function(){
        const fn = jest.fn()
        fn.mockReturnValueOnce(5)

        const result = fn(10)
        expect(result).toBe(5)
        expect(fn).toHaveBeenCalled()
        expect(fn).toHaveBeenCalledWith(10)
    })

    it('can mock axios api calls', async function(){
        const axiosMock = axios as jest.MockedFunction<typeof axios>;
        axiosMock.mockResolvedValueOnce(new Promise(function(resolve){
          resolve({
            data: 'ok',
            status: 200,
            statusText: 'OK',
            config: {},
            headers: {},
          })
        }));
    
        const result = await get_data(axiosMock);
        
        expect(result.data).toEqual('ok');
        expect(axios).toHaveBeenCalledWith({
          url: 'https://some-url.com/api',
            method: 'get'
          }
        );
    })
})