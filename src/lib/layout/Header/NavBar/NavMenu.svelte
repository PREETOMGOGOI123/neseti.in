<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '/about' },
		{ label: 'Courses', href: '/courses' },
		{ label: 'Contact Us', href: '#contact-us' },
		{ label: 'Login', href: '/login' }
	];

	function handleClick(event, href) {
		event.preventDefault();
		goto(`${base}${href}`);
	}
</script>

<ul class="fixed top-0 right-0 flex flex-col w-3/5 h-full bg-white  shadow-lg p-6 space-y-4 overflow-y-auto md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:shadow-none md:p-0 md: pt-24 md:space-y-0 md:space-x-6 md:overflow-visible md:justify-end z-[9999]">
	{#each menuItems as item}
		<li class="z-[9999]">
			<a
				href={`${base}${item.href}`}
				on:click={(event) => handleClick(event, item.href)}
				class="block text-gray-700 hover:text-blue-600 transition duration-300 py-2 md:py-0 text-right md:text-left z-[9999]"
			>
				{item.label}
			</a>
		</li>
	{/each}
</ul>