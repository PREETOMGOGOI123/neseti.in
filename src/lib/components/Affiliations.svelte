<script>
    import StartUpAssam from "$lib/images/logos-affiliations/assam-startup-logo.jpg";
    import StartupIndia from "$lib/images/logos-affiliations/Startup-India_logo.png";
    import MCA from "$lib/images/logos-affiliations/ministry-of-corporate-affairs.png";
    import Iso from "$lib/images/logos-affiliations/Bureau_of_Indian_Standards_Logo.svg.png";
    import Nsdc from "$lib/images/logos-affiliations/NSDC-logo.png";
    import OmVijoy from "$lib/images/logos-affiliations/om-bijoy-charitable-trust logo.png";
    import MYNM from "$lib/images/logos-affiliations/mywn-logo.jpg";
    import MSME from "$lib/images/logos-affiliations/MSME-Logo.png";
</script>

<section class="bg-transparent py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-16">
            Our Affiliations and Approvals
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {#each [{ name: "MCA (Ministry of Corporate Affairs)", image: MCA }, { name: "ISO", image: Iso }, { name: "MSME", image: MSME }, { name: "NSDC (National Skill Development Corporation)", image: Nsdc }, { name: "Startup India", image: StartupIndia }, { name: "Startup Assam", image: StartUpAssam }, { name: "Om Vijoy Charitable Trust", image: OmVijoy }, { name: "MYWN SKILL INDIA", image: MYNM }] as affiliation}
                <div class="flex flex-col items-center">
                    <img
                        src={affiliation.image}
                        alt={affiliation.name}
                        class="w-24 h-24 object-contain mb-4"
                    />
                    <p class="text-sm text-center text-gray-600">
                        {affiliation.name}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
