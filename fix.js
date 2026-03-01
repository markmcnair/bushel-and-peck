const fs = require('fs');
const html = fs.readFileSync('/Users/Max/.openclaw/workspace/bushel-and-peck/index.html', 'utf8');

const updatedHtml = html.replace(
    /<!-- Card 1 -->[\s\S]*?<!-- Form -->/,
    `<!-- Card 1 -->
                <div class="relative pt-5">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border border-pattern flex items-center justify-center text-primary z-10">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="bg-bg border border-pattern pt-8 pb-6 px-4 text-center h-full scalloped-top shadow-sm">
                        <h4 class="font-quicksand font-bold text-dark mb-1">Custom Orders</h4>
                        <p class="font-nunito text-sm text-dark/70">5 days notice please</p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="relative pt-5">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border border-pattern flex items-center justify-center text-primary z-10">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="bg-bg border border-pattern pt-8 pb-6 px-4 text-center h-full scalloped-top shadow-sm">
                        <h4 class="font-quicksand font-bold text-dark mb-1">Celebrations</h4>
                        <p class="font-nunito text-sm text-dark/70">Birthdays, showers, & gatherings</p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="relative pt-5">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border border-pattern flex items-center justify-center text-primary z-10">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.25s-6-3.5-6-7.5c0-2.5 2-4 4-4 1.5 0 2.5 1 2.5 1s1-1 2.5-1c2 0 4 1.5 4 4 0 4-6 7.5-6 7.5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.25v4m-3-1l3 1 3-1"></path></svg>
                    </div>
                    <div class="bg-bg border border-pattern pt-8 pb-6 px-4 text-center h-full scalloped-top shadow-sm">
                        <h4 class="font-quicksand font-bold text-dark mb-1">Follow Along</h4>
                        <p class="font-nunito text-sm text-dark/70">@bushelandapeck</p>
                    </div>
                </div>
            </div>

            <!-- Form -->`
);

fs.writeFileSync('/Users/Max/.openclaw/workspace/bushel-and-peck/index.html', updatedHtml);
