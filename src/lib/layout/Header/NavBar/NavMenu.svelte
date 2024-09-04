<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Courses', href: '/courses' },
		{ label: 'Admission', href: '/admission' },
		{ label: 'Contact Us', href: '#contact-us' },
		{ label: 'Login', href: '/auth' }
	];

	function handleClick(event, href) {
		event.preventDefault();
		goto(`${base}${href}`);
	}
</script>

<ul class="flex space-x-6">
	{#each menuItems as item}
		<li>
			<a
				href={`${base}${item.href}`}
				on:click={(event) => handleClick(event, item.href)}
				class="text-gray-700 hover:text-blue-600 transition duration-300"
			>
				{item.label}
			</a>
		</li>
	{/each}
</ul>