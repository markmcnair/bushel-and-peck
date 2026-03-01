const fs = require('fs');
let html = fs.readFileSync('/Users/Max/.openclaw/workspace/bushel-and-peck/index.html', 'utf8');

const newFloatingElements = `<!-- Floating Bakery Elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            <!-- Cookie -->
            <svg class="absolute top-[15%] left-[8%] w-16 h-16 text-pattern/20 animate-float-1 rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="9" />
                <circle cx="8" cy="8" r="1.5" fill="#FBF8F4" />
                <circle cx="15" cy="10" r="2" fill="#FBF8F4" />
                <circle cx="11" cy="15" r="1.5" fill="#FBF8F4" />
                <circle cx="16" cy="16" r="1" fill="#FBF8F4" />
                <circle cx="7" cy="13" r="1" fill="#FBF8F4" />
            </svg>
            <!-- Whisk -->
            <svg class="absolute top-[25%] right-[10%] w-20 h-20 text-secondary/20 animate-float-2 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <path d="M12 22v-5M9 8a3 3 0 016 0c0 4-3 9-3 9s-3-5-3-9zM10 8a2 2 0 014 0c0 3-2 7-2 7s-2-4-2-7z"/>
                <path d="M10 17h4"/>
            </svg>
            <!-- Croissant -->
            <svg class="absolute bottom-[20%] left-[12%] w-16 h-16 text-primary/15 animate-float-3 rotate-[30deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
                <path d="M4 10c-1.5 2-2 5-1 7l2 1c1.5-1 3-2 5-2s4 1 5.5 2l1.5-1c1-2 .5-5-1-7-1.5-2-4-3-6-3s-4.5 1-6 3z"/>
                <path d="M8 11c1-1 2.5-1.5 4-1.5s3 .5 4 1.5"/>
                <path d="M10 14c.5-.5 1.5-.5 2 0"/>
            </svg>
            <!-- Rolling Pin -->
            <svg class="absolute bottom-[25%] right-[8%] w-20 h-20 text-pattern/20 animate-float-1 -rotate-[40deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <rect x="4" y="10" width="16" height="4" rx="1" />
                <path d="M4 12H2M20 12h2" />
            </svg>
            <!-- Flour dust particles -->
            <div class="absolute top-[35%] left-[25%] w-2 h-2 rounded-full bg-primary/30 animate-float-1"></div>
            <div class="absolute top-1/4 right-[28%] w-1.5 h-1.5 rounded-full bg-secondary/40 animate-float-2"></div>
            <div class="absolute bottom-[40%] left-[30%] w-2.5 h-2.5 rounded-full bg-primary/20 animate-float-3"></div>
            <div class="absolute top-[45%] right-[20%] w-1 h-1 rounded-full bg-secondary/30 animate-float-1"></div>
        </div>`;

html = html.replace(/<!-- Floating "flour dust" particles -->[\s\S]*?<\/div>\s*<\/div>/, newFloatingElements);

const menuFloatingElements = `
        <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <!-- Pretzel -->
            <svg class="absolute top-20 left-4 md:left-12 w-24 h-24 text-pattern/10 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <path d="M12 10.5c-2-2-5-2-7 0s-2 5 0 7c2 2 5 2 7 0M12 10.5c2-2 5-2 7 0s2 5 0 7c-2 2-5 2-7 0M12 10.5v8M9 13.5l6 3M15 13.5l-6 3" />
            </svg>
            <!-- Cupcake -->
            <svg class="absolute bottom-20 right-4 md:right-12 w-20 h-20 text-secondary/10 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                <path d="M6 14h12l-1.5 8h-9z" />
                <path d="M6 14c-1.5 0-3-1.5-3-3.5S5 7 7 7c0-2 2-3 4-3s3 1 4 3c2 0 4 1.5 4 3.5S17.5 14 16 14" />
                <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
            </svg>
        </div>
        <div class="max-w-6xl mx-auto flex flex-col items-center relative z-10">`;

html = html.replace(/<div class="max-w-6xl mx-auto flex flex-col items-center">/, menuFloatingElements);

fs.writeFileSync('/Users/Max/.openclaw/workspace/bushel-and-peck/index.html', html);
