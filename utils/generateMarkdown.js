const licenses = require('./badge');

function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    avatar_url,
    email,
  } = data;

  return `
# ${title}
![${license}](${licenses[license]})
${description ? `## Description\n${description}` : ''}
## Table of Content
${description ? '* [Description](#description)' : ''}
${installation ? '* [Installation](#installation)' : ''}
${usage ? '* [Usage](#usage)' : ''}
${license ? '* [License](#license)' : ''}
${contributing ? '* [Contributing](#contributing)' : ''}
${tests ? '* [Test](#tests)' : ''}
${avatar_url || email ? '* [Questions](#questions)' : ''}
${installation ? `## Installation\n${installation}` : ''}
${usage ? `## Usage\n${usage}` : ''}
${license ? `## License\n${license}` : ''}
${contributing ? `## Contributing\n${contributing}` : ''}
${tests ? `## Tests\n${tests}` : ''}
${avatar_url || email ? '## Questions?' : ''}
${avatar_url ? `![Profile Avatar](${avatar_url})` : ''}
${email ? `Email: ${email}` : ''}
`;
}

module.exports = generateMarkdown;