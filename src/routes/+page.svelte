<script>
	import TailwindCss from '../lib/TailwindCSS.svelte';
	import Fa from 'svelte-fa'
	import { faFlag } from '@fortawesome/free-solid-svg-icons'
</script>

<TailwindCss/>

<h1>Welcome to SvelteKit</h1>
<h1 class="py-8 px-4 border border-indigo-900 shadow-lg"><Fa icon={faFlag} /> lets rock'n roll!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
