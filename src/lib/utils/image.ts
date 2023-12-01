import { FileWithPreview } from '@/components/Form/types';
/*

const toDataURL = (url: string): Promise<string> =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve((reader?.result || '') as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

function dataURLtoFile(dataUrl: string, fileName: string): File {
  const parts = dataUrl.split(',');
  const part = parts[0];
  const matched = part?.match(/:(.*?);/);
  const mime = matched ? matched[1] : '';
  const bstr = atob(parts[1] || '');
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}

export function urlToFile(url: string, fileName = 'file') {
  const fileArr = [];
  toDataURL(url).then((dataUrl) => {
    const fileData = dataURLtoFile(dataUrl, fileName);
    fileArr.push(fileData);
  });
  return fileArr;
}
*/

export async function urlToFile(
  url: string,
  fileName = 'file',
): Promise<FileWithPreview> {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], fileName, { type: blob.type });
  return Object.assign(file, {
    preview: url,
  });
}
