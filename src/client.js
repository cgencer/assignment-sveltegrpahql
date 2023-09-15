import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'https://kuzguni.hasura.app/v1/graphql',
    fetchParams({ session }) {
        return {
            headers: {
            	'x-hasura-role': 'cg',
            },
        }
    },
})