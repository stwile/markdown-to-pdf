import { writeFileSync } from 'fs';
import mdToPdf from 'md-to-pdf';

const path = {
  path: 'README.md',
};
const dest = {
  dest: 'README.pdf',
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(async () => {
  // eslint-disable-next-line no-console
  const pdf = await mdToPdf(path, dest).catch(console.error);

  if (pdf) {
    writeFileSync(pdf.filename, pdf.content);
  }
})();
