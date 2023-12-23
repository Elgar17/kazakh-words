import fs from 'fs';
import { transformCyrillicToArabic } from 'hapin-utils';

// 读取basic-3000.json 
const file = fs.readFileSync('./basic-3000.json', 'utf8');
const data = JSON.parse(file);

// 转换俄文字符
const transformedData = data.map((item) => {
  const arab = transformCyrillicToArabic(item.kz);
  return {
    ...item,
    arab
  }
});

// 写入basic-3000-ar.json
fs.writeFileSync('./basic-3000-ar.json', JSON.stringify(transformedData, null, 2));
