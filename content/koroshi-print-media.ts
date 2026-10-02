import { localOriginal, type MediaAsset } from "./projects";

const sourceRoot = "/Users/xesco/Desktop/prints koroshi";

function print(
  index: number,
  filename: string,
  alt: string,
  aspect: MediaAsset["aspect"],
  caption?: string,
): MediaAsset {
  return {
    ...localOriginal(`/images/archives/koroshi-prints/${String(index).padStart(3, "0")}.webp`, alt, aspect, {
      sourcePath: `${sourceRoot}/${filename}`,
      note: "Optimized local-original export supplied for the Koroshi print archive.",
    }),
    caption,
  };
}

// The complete user-confirmed Koroshi print folder. One byte-identical duplicate
// screenshot is intentionally represented once so the archive never repeats work.
export const koroshiPrintsArchiveMedia: MediaAsset[] = [
  print(1, "03-koroshi-no-bad-days.png", "Koroshi No Bad Days graphic artwork", "portrait", "No Bad Days — Koroshi graphic artwork."),
  print(2, "04-koroshi-tokyo-surf.png", "Koroshi Tokyo Surf graphic artwork", "square", "Tokyo Surf — Koroshi graphic artwork."),
  print(3, "Camuflaje forestal oscuro con marca sutil.png", "Koroshi forest camouflage print artwork", "square", "Forest camouflage print with subtle Koroshi mark."),
  print(4, "Camuflaje rojo con cruce central reparado.png", "Koroshi red camouflage print artwork", "square", "Red camouflage print artwork."),
  print(5, "Captura de pantalla 2026-09-18 a las 12.00.36.jpg", "Koroshi print artwork study", "landscape"),
  print(6, "Captura de pantalla 2026-09-18 a las 8.50.35.jpg", "Koroshi print artwork study", "portrait"),
  print(7, "Captura de pantalla 2026-09-18 a las 8.50.51.jpg", "Koroshi print artwork study", "portrait"),
  print(8, "Captura de pantalla 2026-09-18 a las 8.51.06.jpg", "Koroshi print artwork study", "portrait"),
  print(9, "Captura de pantalla 2026-09-18 a las 8.51.55.jpg", "Koroshi print artwork study", "portrait"),
  print(10, "Captura de pantalla 2026-09-18 a las 8.52.00.jpg", "Koroshi print artwork study", "landscape"),
  print(11, "Captura de pantalla 2026-09-18 a las 8.53.01(1).jpg", "Koroshi print artwork study", "portrait"),
  print(12, "Captura de pantalla 2026-09-18 a las 8.53.34.jpg", "Koroshi print artwork study", "portrait"),
  print(13, "Captura de pantalla 2026-09-18 a las 8.53.46.jpg", "Koroshi print artwork study", "square"),
  print(14, "Captura de pantalla 2026-09-18 a las 8.53.50.jpg", "Koroshi print artwork study", "landscape"),
  print(15, "Captura de pantalla 2026-09-18 a las 8.54.01(1).jpg", "Koroshi print artwork study", "portrait"),
  print(16, "Captura de pantalla 2026-09-18 a las 8.54.12.jpg", "Koroshi print artwork study", "portrait"),
  print(17, "Captura de pantalla 2026-09-18 a las 8.54.28 (1).jpg", "Koroshi print artwork study", "portrait"),
  print(18, "Captura de pantalla 2026-09-18 a las 8.54.38.jpg", "Koroshi print artwork study", "portrait"),
  print(19, "Captura de pantalla 2026-09-18 a las 8.55.00(1) (2).jpg", "Koroshi print artwork study", "portrait"),
  print(20, "Captura de pantalla 2026-09-18 a las 8.55.29.jpg", "Koroshi print artwork study", "portrait"),
  print(21, "Captura de pantalla 2026-09-18 a las 8.56.20.jpg", "Koroshi print artwork study", "landscape"),
  print(22, "Captura de pantalla 2026-09-18 a las 8.56.29.jpg", "Koroshi print artwork study", "portrait"),
  print(23, "Captura de pantalla 2026-09-18 a las 8.56.39(1).jpg", "Koroshi print artwork study", "square"),
  print(24, "Captura de pantalla 2026-09-18 a las 9.27.17.jpg", "Koroshi print artwork study", "landscape"),
  print(25, "Captura de pantalla 2026-09-18 a las 9.33.06.jpg", "Koroshi print artwork study", "landscape"),
  print(26, "Captura de pantalla 2026-09-21 a las 8.17.58.jpg", "Koroshi print artwork study", "portrait"),
  print(27, "Captura de pantalla 2026-09-21 a las 8.26.41.jpg", "Koroshi print artwork study", "portrait"),
  print(28, "Captura de pantalla 2026-09-22 a las 16.33.34.jpg", "Koroshi print artwork study", "portrait"),
  print(29, "ChatGPT Image 10 sept 2026, 16_31_21.png", "Koroshi print artwork study", "square"),
  print(30, "Degradado marino en azul y coral.png", "Koroshi blue and coral marine gradient artwork", "portrait", "Marine gradient in blue and coral."),
  print(31, "Dragón japonés en blanco y rojo.png", "Koroshi Japanese dragon print artwork", "square", "Japanese dragon artwork in white and red."),
  print(32, "Etiqueta KOROSHI con ola y sol naranja.png", "Koroshi wave and orange sun label artwork", "landscape", "Koroshi label with wave and orange sun."),
  print(33, "Insignia circular Koroshi de calavera roja.png", "Koroshi red skull circular insignia", "square", "Koroshi red skull circular insignia."),
  print(34, "Insignia circular de calavera roja.png", "Koroshi red skull insignia artwork", "square", "Red skull insignia artwork."),
  print(35, "KOROSHI_SHORTS_ORIGINAL_STYLE_TRUE_RAPPORT_7680x5120.png", "Koroshi shorts original repeat print", "landscape", "Koroshi Shorts — original repeat print."),
  print(36, "Lámina marina técnica en ocre y negro.png", "Koroshi ochre and black marine technical artwork", "landscape", "Marine technical artwork in ochre and black."),
  print(37, "Seis etiquetas de baño bicolor.png", "Koroshi bicolour swimwear labels", "landscape", "Six bicolour swimwear labels."),
  print(38, "Serigrafía Raised by the Sea.png", "Koroshi Raised by the Sea screen print", "portrait", "Raised by the Sea — screen print artwork."),
  print(39, "koroshi-coral-allover-black-transparent-4096-300ppi.png", "Koroshi coral all-over print", "square", "Coral all-over print artwork."),
  print(40, "koroshi-tropical-collage-allover-black-transparent-final-300ppi.png", "Koroshi tropical collage all-over print", "square", "Tropical collage all-over print artwork."),
];
