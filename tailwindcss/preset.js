const { Preset } = require('use-preset');

module.exports = Preset.make('preset-tailwindcss')
    .option('forms', false)
    .option('typography', false)

    .editJson('package.json')
        .title('Install Tailwind CSS')
        .merge({
            devDependencies: {
                autoprefixer: '^9.8.6',
                'postcss-import': '^12.0.1',
                tailwindcss: '^1.7.0',
            },
            browserslist: [
                '> 0.5%',
                'last 2 versions',
                'Firefox ESR',
                'not dead',
            ],
        })
        .chain()

    .copyTemplates('ask')

    .editJson('package.json')
        .if(({ flags }) => Boolean(flags.forms))
        .title('Install Tailwind CSS Custom Forms')
        .merge({
            devDependencies: {
                '@tailwindcss/custom-forms': '^0.2.1',
            },
        })
        .chain()
    .edit('tailwind.config.js')
        .if(({ flags }) => Boolean(flags.forms))
        .title('Add Custom Forms plugin')
        .search(/plugins: \[/)
            .addAfter(`  require\('@tailwindcss/custom-forms'\),`)
            .end()
        .chain()

    .editJson('package.json')
        .if(({ flags }) => Boolean(flags.typography))
        .title('Install Tailwind Typography')
        .merge({
            devDependencies: {
                '@tailwindcss/typography': '^0.2.0',
            },
        })
        .chain()
    .edit('tailwind.config.js')
        .if(({ flags }) => Boolean(flags.typography))
        .title('Add Typography plugin')
        .search(/plugins: \[/)
            .addAfter(`  require\('@tailwindcss/typography'\),`)
            .end()
        .chain()

    .installDependencies();
