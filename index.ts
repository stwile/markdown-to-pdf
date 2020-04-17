import { writeFileSync } from 'fs';
import mdToPdf from 'md-to-pdf';

const path = {
  path: 'README.md',
};
const dest = {
  dest: 'README.pdf',
};

(async () => {
  const pdf = await mdToPdf(path, dest).catch(console.error);

  if (pdf) {
    writeFileSync(pdf.filename, pdf.content);
  }
})();
