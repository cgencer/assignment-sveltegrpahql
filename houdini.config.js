/** @type {import('houdini').ConfigFile} */
const config = {
    watchSchema: {
        url: 'https://kuzguni.hasura.app/v1/graphql',
		headers: {
			'x-hasura-role': 'cg',
		},
    },
	"plugins": {
        // add your plugins here
        "houdini-svelte": {},
//        'client': "./src/lib/graphql/client",
    }
}

export default config
