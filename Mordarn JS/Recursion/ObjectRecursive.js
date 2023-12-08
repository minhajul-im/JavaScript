const electronics = {
  brand: "samsung",
  phone: {
    name: "s-23 ultra",
    launch: {
      Announced: "2023, February 01",
      StatusAvailable: "Released 2023, February 17",
    },
    body: {
      Dimensions: "163.4 x 78.1 x 8.9 mm (6.43 x 3.07 x 0.35 in)",
      Weight: "234 g (8.25 oz)",
    },
    features: {
      network: {
        technology: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
      },
      communication: {
        wi_Fi: "802.11 a/b/g/n/ac/6e, tri-band, Wi-Fi Direct",
        bluetooth: "5.3, A2DP, LE",
      },
      camera: {
        backCamera: {
          quad: "200 MP, f/1.7.... zoom",
          tech: "periscope telephoto",
          videoCamera: {
            feature: "LED flash, auto-HDR, panorama",
            video: "8K@24/30fps,....EIS!",
          },
        },
        selfieCamera: {
          single: "12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF",
          selfieFeature: {
            feature: "Dual video call, Auto-HDR, HDR10+",
            video: "4K@30/60fps, 1080p@30fps",
          },
        },
      },
    },
  },
};

/**
    this is an object, here with a lot of nested objects & objects, your task, 
    is to create a dimensional object like "key" and "value" without nested objects.
    (each key will add an underscore)
    for example:
 */

const finalObject = {};

const fantastic = (objectName, object) => {
  for (const key in object) {
    if (typeof object[key] === "object") {
      fantastic(`${objectName}_${key}`, object[key]);
    } else {
      finalObject[objectName + "_" + key] = object[key];
    }
  }
};

fantastic("electronics", electronics);
console.log(finalObject);
