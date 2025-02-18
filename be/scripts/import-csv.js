const ora = require('ora').default;
const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

async function importCSV() {
  const csvFilePath = path.join(__dirname, '../../data/LokacijeCSV.csv');
  // row {
  //   streetid: '221472',
  //   ulica_maticni_broj: '710253000005',
  //   ulica_ime: 'ВОЈВОДЕ ЖИВОЈИНА МИШИЋА',
  //   ulica_ime_lat: 'VOJVODE ŽIVOJINA MIŠIĆA',
  //   tip: 'УЛИЦА',
  //   tip_lat: 'ULICA',
  //   created: '2022/11/28',
  //   modificationdate: '2025/01/09',
  //   retired: '',
  //   naselje_maticni_broj: '710253',
  //   naselje_ime: 'ЖИТОРАЂЕ',
  //   naselje_ime_lat: 'ŽITORAĐE',
  //   opstina_maticni_broj: '70416',
  //   opstina_ime: 'ВЛАДИЧИН ХАН',
  //   opstina_ime_lat: 'VLADIČIN HAN',
  //   primary_key: '95575',
  //   wkt: 'LINESTRING(590962.74 4729252.73,590966.94 4729260.01,590971.14 4729266.45,590975.62 4729270.64,590981.78 4729277.08,590987.65 4729280.16,590999.97 4729282.12,591010.89 4729283.8,591031.04 4729285.48,591050.08 4729286.88,591077.23 4729288.84,591113.62 4729292.75,591156.45 4729296.11,591178.84 4729296.95,591203.75 4729299.75,591235.1 4729300.59,591269.25 4729303.67,591292.49 4729306.47,591308.72 4729308.71,591325.52 4729310.1,591348.19 4729308.15,591370.03 4729304.23,591391.3 4729300.59,591410.06 4729300.03,591422.09 4729299.19,591433.01 4729301.71,591442.81 4729303.66,591450.36 4729309.54,591466.32 4729320.74,591490.67 4729343.69,591506.63 4729357.69,591527.9 4729378.96,591548.9 4729401.07,591569.61 4729423.47,591587.53 4729443.06,591603.77 4729459.01,591611.32 4729470.21,591617.48 4729479.17,591619.44 4729485.61,591619.72 4729491.48,591617.76 4729497.36,591610.77 4729505.76,591598.17 4729512.48,591582.49 4729518.64,591561.5 4729525.91,591536.03 4729532.35,591476.4 4729551.11,591454.85 4729559.79,591420.7 4729582.74,591396.35 4729603.73,591381.79 4729622.49,591373.12 4729634.25,591366.68 4729644.88,591364.16 4729651.6,591364.16 4729657.48,591361.64 4729665.6,591363.88 4729672.59,591367.8 4729677.07,591373.96 4729681.55,591380.95 4729684.35,591385.99 4729686.03,591391.03 4729685.75,591398.31 4729682.67,591413.15 4729676.23,591428.54 4729670.91,591444.22 4729666.99,591461.01 4729666.15,591476.69 4729664.47,591497.68 4729662.79,591511.96 4729661.39,591523.15 4729664.19,591534.63 4729669.51,591546.39 4729677.07,591558.71 4729684.91,591569.06 4729691.62,591582.78 4729701.98,591597.06 4729710.1,591610.21 4729720.45,591624.49 4729728.85,591635.41 4729733.05,591651.64 4729737.25,591674.03 4729740.33,591695.87 4729742.29,591717.14 4729744.81,591736.18 4729747.6,591756.89 4729747.6,591779.29 4729747.32,591807.84 4729744.52,591832.75 4729741.72,591847.59 4729743.12,591857.66 4729745.08,591867.18 4729749.56,591880.06 4729758.24,591893.78 4729768.32,591913.93 4729782.03,591924.01 4729790.43,591939.12 4729802.46,591952.84 4729811.98,591971.32 4729826.82,591986.43 4729840.53,592000.99 4729852.57,592023.66 4729874.12,592041.86 4729893.44,592055.58 4729906.03,592067.33 4729915.83,592079.93 4729928.14,592094.49 4729942.42,592108.76 4729953.9,592118.56 4729966.21,592126.12 4729984.97,592129.2 4730004,592135.92 4730025.27,592138.44 4730037.31,592144.6 4730050.19,592156.91 4730065.86,592168.11 4730078.18,592181.55 4730100.57,592192.18 4730116.8,592201.14 4730134.16,592207.86 4730150.95,592212.06 4730163.55,592218.78 4730176.43,592229.98 4730185.1,592243.69 4730190.98,592252.65 4730194.9,592261.89 4730197.42,592276.16 4730201.06,592287.08 4730206.38,592297.44 4730213.09,592303.6 4730224.01,592310.04 4730246.12,592314.8 4730255.92,592321.79 4730266.84,592330.75 4730276.35,592335.23 4730283.35,592348.39 4730293.99,592368.26 4730311.62,592382.26 4730323.94,592401.57 4730337.93,592415.01 4730349.97,592427.61 4730360.05,592440.2 4730365.92,592450.28 4730369.56,592475.19 4730373.48,592507.95 4730378.24,592533.14 4730382.16,592564.49 4730387.76,592598.36 4730393.63,592623.27 4730396.15,592644.83 4730397.83,592660.5 4730398.11,592682.9 4730398.11,592708.09 4730395.03,592729.37 4730392.51,592760.72 4730386.35,592786.47 4730382.99,592808.02 4730377.95,592840.77 4730372.36)'
  // }

  const records = [];
  fs.createReadStream(csvFilePath)
    .pipe(csvParser({ separator: ';' }))
    .on('data', (row) => {
      records.push(row);
    })
    .on('end', async () => {
      console.log(`Records loaded from file: ${records.length}`);
      try {
        const totalRecords = records.length;
        const spinner = ora(`Importing 0/${totalRecords} records...`).start();
        let i = 1;
        for (row of records) {
          spinner.text = `Importing ${i + 1}/${totalRecords} records...`; // Update progress

          await prisma.LokacijeIIT.upsert({
            where: { primary_key: row.primary_key },
            update: {
              ...row,
            },
            create: {
              ...row,
            },
          });
          i++;
        }
        spinner.succeed(`Successfully imported ${totalRecords} records!`);
      } catch (error) {
        console.error('Error while storing data:', error);
      } finally {
        await prisma.$disconnect();
      }
    });
}

importCSV();
