export const apps = [
    {
        id: 1,
        name: 'ColorPicker',
        description: 'ColorPick（拾色） - 用于识别相机或图像中的颜色的应用程序。',
        image: '/static/pickcolor/logo.png', // 首页宣传稿图
        price: 'Free',
        showInfo: false,
        // auction: {
        //     hours: '32',
        //     minutes: '16',
        //     seconds: '03'
        // },
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg'
        },
        logo: '/static/pickcolor/logo.png',
        previewImages: [
            '/static/pickcolor/preview0.jpg',
            '/static/pickcolor/preview1.jpg',
            '/static/pickcolor/preview2.jpg',
            '/static/pickcolor/preview3.jpg',
            '/static/pickcolor/preview4.jpg',
            '/static/pickcolor/preview5.jpg'
        ],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.git.hui.colorpicker.google',
        androidUrl: 'http://cdn.hhui.top/app/color-picker/ColorPicker-1.1.0.apk',
        // 小程序二维码
        qrCode: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAcYB1AMBIgACEQEDEQH/xAAvAAACAgMBAQAAAAAAAAAAAAAACAYHAQIFBAMBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAC+9tfpWpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGpsGuN8GgFH0+e8ZpO6UDhkxbAZMWwGTFsBkxbAZMWwGTlqf3EM7C5ovR2RbAZMWwGTFsBt7IU5sQAK9isHqQfvfh90pMWwGTmSdXaMkAAAAGKUtZFhkxbAZMWwGTFsBkxbAZMWwGTmqb3qMVjOK0Ao303jVA38QOJTf1NN6VOWwFTlsBU5bAVPwb2jokVxU7cQzsWlIVOWwFTlsBS60PohZ3bHpsG1sqgb+IVHLYDXYCpy2Aqfh3pUBAymwuQpsLkZpAn9OUiz0osTW8quakqctgKnLYCpy2AqeKsFChNb0ou9Bi8ZxWgFG+m8aoG/iBxYTeqE3pV1B3OsxMiGhMiGg/8dkMeEiuKnbiGdABbGTUo47kIQ9xuhb4IeT9nFxbIoiqbVXgmRD8jz9TidsTOW1HNhxqgt+nhYQ2NWoVpzT1yQDkos9KLFrNSqzUlOUraC+kyIaEy91f9Ee6FTWFCa3pRd6DF4zitAKN9N41QN/EDiwm9UJvSmVmZlZgAAAf6PSGPCRXFTtxDOgAACPPCjBzvgBt9vOH0+YDVWrSNnEgMBmH9CMinaSnmHEZpZWEL7xwO+ZAOSiz0osWs1KrNSUEvrBL6AAdHndEe6FTWFCa3pRd6DF4zitAKN9N41QN/EDiwm9UJvSmVmcGmyoi3QqIt0Ghj0ijokVxU7cQzoABCSbIwzFZFOFqVWB27CKiLdCoi3QYXu+H2iAziSyQv6oLfgwnJboVE6FGT4uQrCzjlIs9KLFrNSqzUlBL62VVFRFuhUXRsz1jLwqawoTW9KLvQYvGcVoBRvpvGqBv4gcWE3qPW0MOLwDDi8Aw4vAMPHaa5JTtxU7cQzoV4WGpEw6Yuj60/xC+kLvrtlcNjRfMGHIBPwKqhow55vSAvHfLoCIkuF4tklyduInZBX9QJ/TlIs9KLFrNSk1pDDi8Aw4vAMOLwDDwqreCVLelF3oMXjOK0Ao303jVA3+hUJsOSCbDkgmw5IJsOSCbDkgm1xXP2DvL0wq9FCuGnkvHQRiVX0K481eUKX6oF0XCVvf1DV2dmpGZmB2e6AgE4g84HHqC3/EIaz8qq4YdO/vDDwv6gT+nKRZ/4SJsOSCbDkgmw5IJsOSCbDkgm162p3jsYzitAKPp894yaovD1CKg9QvzAgLpUA9QioPUHBO8IrbQyC9MLgQEfVTCvX1Qp9TCFvohZZzYoN7y9F2YC9SurPWCtB6hFQ5U4g/0H7EVuQYZbmRW0pIG8FEf3z+kDmJQPULIzYAAAAABDyYCK3WX/AIzitAKN9PpGEceQhFOW5Cbl5MauTGiz0xc9MHV+zdyk5kcTmWnKs1l6pLHEPB8FiqxwxV3BkaMDgJOAAF5X8h4WhV4AH1OqPKCNWux1QFoLhTwDoJe6BLwDmpa8gK8yUGUgfAQ8H+zX1gni1Svhj4QlRbBIzdF+AYzitAKPp8/pABEITdyE3LTvFOwsutAHXlEXlAgff4Gg4kQWq4jjRd3l6KFY1cgcSj6rfUUyvX0Qs6s0+rYiSxpiV2Jh2bns8Qv4SWLDie9LJwOPUFv1AK/K4oz5VLMd4CDzhDRtxOwYVegAAb6wa+sERzkdfyE4mDDAABjOK0Ao+nz+kAEQhN3ITcm1k+JjRfxgAor6VPCS/wAYAF/3v2qTiVhAALbqRwyu7/yGKAYAKC9kxUAYT5bX8RuSAJTFpTFg7vCBjvgvF2nT+98LcSAXEGO8FAv6LdST0osABYM+9l6HE7YFHfG9wOd0YUQObp1egxeM4rQCj6fP6QARCE3chNySzGqQcac1JbYm0Jm8ILVzVIWtH4SAAE+gIWsVSFrFUhPYEAwN/UDfwAEE5tmggEljU4L/AJHJQI1JQrdcHXTsgr+oE/pykWelFgAGLvSi70AAAAhU1hQmt6UXegxeM4rQCj6fPeMpO6qBx3eFv6Txn3+A0lt05cRz/P2MiByWNSobmqbuqYVo9nwPkHpPMezyGDPrPGejznT6kYCTkYCTkYA9H00O8Rj6kiYlW2QLjTtw1DK9kvGDrR31eUD6eg9HT4gdsjeg+f35HrE48vO0PNelF3qMVjOK0Ao30+kaIG/6bx628W1kyl1obGhSEnU5Q68oqiWCXab/AHPNcMUs4vleWHXooVwU+cMnaMvOpRDnlUttSvFDc9ZyEE3CEHT5gfX5fQfqJ7R0U264Xa5eC3MlRwuTmrRfBZ5FQ6SMtspJarUqIyJKjx+0U6sb2gBCel4vWPbCJxChNb0ou9Bi8ZxWgFH0+f0gAgPFV5bpEJeLPTFz0wBavWKUmEQ7g8RUUnJsvTC1qKU4dTyYu4qILdKstMDn1kW6VEFcVJfnOKUOh4TWcTKRl5AAACduJR4uBdYUoXWFKFkVuMXelF3oAAjnkuv4DFQqa8URq9PNYxZ2M4rQCj6fPeMmF0i1U3tWqi8mNTGwjx0xLImOtKYvKBA9GbwLLcU455eouYMYpErqs4AB2XmRl5iAJ+9lWiyjNB1rP43ZEpjckjY/QABDyYC5gxguYMYLmxgAFbqQ26kDF3onc4GMFzBjBcwYwXOSlzgBjOK0Ao303jVA38QOAAC2b5EtLQq8deUReUAHIOvVNI8kjQXgUeOkCWjpAozzQNdxxBeGHAqekxxCCzoSmNySNj9GOGd2oKanhRA6VBFVA0Ir7+xBchvRVWqK3Uht1IAuy5hLR0gS0dIEtsFkYwWoJ3bZdOM4rQCjfTeNUDfxA4AC8mNXJjRZ6Yf8ItKU5hY/UdSeXEMH/qUVpkVuZEu4AAR0ddC+68QpzYgUSuzErsNhZ9YWeJTG36DEWlQIBdrJU8XCttLswLE6EvAQ18kNOq7qRO6VupDbqQMXelF3oAqdYj9CC9EemFTUEAvRiwMZxWgFG+m8aoG/iBwAF5MauTGgAJtCZtCSSyJuI6emtliuIgV92+B4PepAzyXcoOq6KMg8wjIMNT1uX8VFYi6VIP8A44fdOMIyDzVgtF2lbsTaIHP6CdjUJP5A7rkoyDNrIBe14IyFh14Ae/wA83pRCwRvgAxnFaAUb6fSMK00xCsjTBUduAAAvsbaYMc/ogrNg3KBG5IvROF9h4FoVe+orVXvohZ2p/5GxKCmEWXYvbhWvZ5UXtXmNlqcxuIsJVY9cA2U2RdoC307cROyCWpVj+itDTArI0wJXFGCX0ACz/Uy3QFZld9gABjOK0Ao+nz3jNC3ugcMKL0DCi9AwovQMKL0DCi9AwsyUi4hnYHPAoWnnbUgre+KHC+KHAk1vr0DCZ+d/FCkVqQ6ng+X1H68XtChS+goUvpbTsUvwgy/qBP6aUTciLDY2cqzUlBL6wS+gAPf0Of0AAAAMZxWgFG+m8aoG/iBxLmOoVvSvCwwrwsMK8LDCvI5c0dEiuKnbiGdACJS0K8VR7kYOOATZhqRbE4fcAjHDsMK80sYFRKuC0bMWK7RkltZJbikQDL+oE/pmvLDCLSkCgl9YJfQAHv93h9YqxVwWjaSuXqMVjOK0Ao303jVA38QOLCb1Qm9KkXRgFmOycYOycYH/jshjwkVxU7cQztD3wvRTzYpq4ZPPN6QjaSPohZZzYqc2IAC11bYVSHZ+vB+o959foeb1gC2sktpSQAdjj9M+x8g+p8g8/j6gcs+3xHv9fA9YjIAXrRV6jFYzitAKN9N41QN/EDiwm9UJvSmVmZlZgAAAf6PSGPCRXFTtxDOr0wtQCvuHQdslvkEnR5ULftSz7titdsk7OP2BW6ktupADJice/sjPkECdrda1aFDFjhXL+qRexYRDZkB54YTsggUVWF1xsrg9HnAAL1oq9RisZxWgFG+m8aoG/iBxYTeqE3pTKzOZVJRJewUSXsDER6RR0SK4qduIZ0IaTJSLP4pQT60B3S7CordK/UBv1AGBv6gb+FbqS26kD6271xhorKucIiXtDyuWgV+2Rpil7cPYhr5IadV3Uid0rdSHdpgoknMGG+sFapaUJw+h5zzl7cEqe9aKvQYvGcVoBRvpvGqBv4gcWE3qM2WM2LIDNiyAzYsgM3HaG5hV1xU7cQzq9MKvRQrhp44ZPEYedGDLzIy8xX6gN+oAwN/JfNTzVIx/YJ33ddgACoLfqAV8AHQS+zRskNtaoTuu6htrjNlNXKUEvrBL6Be0xFY6LLfctGFTXyCF3pM5aSvGcVoBRvpvGqBv9GISgdcEoHXBKB1wSgdcEoHXBKLivXqHUXphfAIe4fUk5lGHnjgnjzRyRkAT9/4uJQOuEYs/wCf0AAAAqC3/gIOOuCUDrglA64JQOuC/NTyesUEvr5cQ41g4yAAAAAGM4rQCj6BABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYCtAK//8QALxAAAAQGAQMDBAMBAQEBAAAAAAQFBgECAwcQFzYSIDUWMjMVMDE0ERMUQFAhJP/aAAgBAQABCAAdMR0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zDpmHTMOmYdMw6Zh0zCMIwzD/ANip7swBsxAqUMmI74IDfBAb4IDfBAb4IDfBAb4IDfBAb4IDfBAb4IDfBAM25hV1qlQhSD2uEWaJgnRq74IDfBAb4IDfBAb4IDfBANS6pRyrVBLp5d90CrWVvp1XfBAIipIrpJFRknm6JJ5xvcgN8EBvggGVcgs7VAyTpdyuoypaWeUJt8EBvggN8EBvggN8EBvggN8EBvggN8EBvggN8EBvggGTcQs7jZstSFT3ZgFvwyp92yXLDGL7eSRO+0HOSPZejmOGHw5BBj9et2WM5Gp97z4kv/dsT5lZxU92YBb8MqYZaIVXnGRTDWj2wNHtgaPbA0e2Bo9sDR7YGj2wNHtgOi0iAjt5UUqAslywxh2sFKdlcrWPaPbA0e2Bo9sDR7YCvZpuEUlROUw3HAcbqrSUie7nULZvlWdlZVkPh0W0RnMp/UDmj2wEhMopKYTT6M8sJ5JpY6PbI0e2Bo9sBdSaNq6FFWQ93OobudQ3c6hu51DdrqBOtNXKFq0zz4mv4YLcJuVwyJxzR7YGj2wNHtgaPbA0e2Bo9sDR7YGj2wHraxCQG4dUyosT5lZxU92YBb8MqYtZzlI+zcLhS/iyXLTHe5eOLnZYb9lw/Zvpx5K7YfmAS/GEA8+JL+LNc1pfZutwZVxYnzKzip7swC34ZUxaznKRi8C6royalVE3YT1GwnqNhPUbCeo2E9RTjGNOSMbhcKX8WS5aY7LjvBzpbtPFCOwnqEKtVMIaTXrObji5i2SWQVXcTKH9dskXLklZUEqZs7Ceo2E9RsJ6hnGzJ1roxkzXjGWjVjDYT1DEejqPu5GKGxfTjyV2W+ZbWUmkmGzuu2SJJJKckkkjz4kv4s1zWli8biW0WshwTNhPUbCeo2E9RsJ6hMfrxqqRGnUF1uDKuLE+ZWcVPdmAW/DKmLWc5SMX28Si91L4qYuFwpfxZLlpjsuvJNF7qP8AH9c4blalBvIsIuWtRi3FyEBaKaEr4Ij+ymL6xkjTb3QISzR/H9c4YnD0EGP16wjTnFuJYyvdCjN/ZTF8p5J2+l9IhLNH8f1zi2HCEfLz4kv4s1zWli/Pzt3tR/LJuLrcGVcWJ8ys4qe7MAt+GVMWs5ykYvt4lF7qXxUxcLhS/iyXLTHZOWLTzdU/+ImF8yYkXViWWJozGEYREk88k3VJ/rNCpWq1P4/sFmSxeq0541P8RMSyyywhLKP8RMXGLF6LKXKlL/WaE9etUhCE4sfQoVUBVjV/xExLJLJLCWXDz4kv4s1zWli/Pzt3tR/LJuLrcGVcWJ8ys4qe7MAt+GVMWs5ykYvt4lF7qXxUxcLhS/iyXLDHc4fPrPfah0t1JbU5dQ9fssFTRc4XpGS0YwhCMY+v2WHi5UFebSmlJPoJ5hUba8kUZKyiLPuVBR0VSoqXr9lgieJqBWmaJ4efE1/Fmua0sX5+du9qP5ZNxdbgyrixPmVnFT3ZgFvwypi1nOUjF9vEovdS+KmLhcKX8WS5aY7nD59Z+yw+HIIMfr1sW35wg4vpx5K7LX8HR8vPiS/izXNaWL8/O3e1H8sm4utwZVxYnzKzip7swC34ZUxaznKRi5rRVXSRTqCdpR4jSjxGlHiNKPEaUeIkhGWSWEbhcKX8WS5YY7F+6DcQFOsmnN2M8GbUOhYM11Uqds+7CRM0bqhvIB5wqlJNI6UeI0o8RpR4jSjxGlHiGwnGEpvpZAzVljPSqSw0o8Q0LVOdFcqWpGhcxqKjpSiJVO0o8RpR4jSjxCK/EVkJ1FuK27GeKNWWvRpVpHnxNfxZrmtLF0GQtOqqkTJulHiNKPEaUeI0o8QQs27ix8pXnF1uDKuLE+ZWcVPdmAW/DKmLWc5SPs3C4Uv4sly0x2XY5uo4bfHUQObji5i0HOSP37mc3WxD8wCX4wgHnxJfxZrmtL7N1uDKuLE+ZWcVPdmAW/DKmG0u1W8slVSlvdUG91Qb3VBvdUG91Qb3VBvdUG91QLt4VBaSDybUFkuWGMXCuCbaJohRob3VATZNC41H1OZ0QnCa8KgiTRSKcl4FBcmlR6miE4G2bQtpS9UFd7qgt4/jbvqqUlcPq555rrf06jvdUDeVJ1dETlGpUm6Kc843sqBr3eUFxfTkuoLgvAw0k0mbob3VBb54mHanHDdcXM5utiH5gEvxhAPPiS/hpOas2FeVSo73VBvdUG91Qb3VBvdUG91Qb3VBvdUDmuwfcKMZS6osT5lZxU92YBb8Mqfdslywxi+3kkTFo+DkcOHz6yG5yFFxeHg5zFhv2XDi9HMcMPhyCDH69bFt+cIOL6ceSsWL8ArYuZzdbEPzAJfjCAefEl/7tifMrOKnuzAVqNOvRq0amqGMNUMYaoYw1QxhqhjDVDGGqGMNUMYaoYw1QxhqhjDVDGCIx20gG5jiaL7eSRMJL8dKMRpkSG03yE23DQVE4ionFO3LRSk08ok9pvkNBxLD1XaCG4NUMYPynLbyCfM1tpvkMpDTX2kzq7j1QxgQIlk4mXJlTH69bFt+cIOF5tpDhL0S6pqhjB9HjdvlEqnNjab5CmpHVU9WPHYfmAS/GEAdJ0DxQwUMaoYw1QxhqhjDVDGGqGMNUMYaoYw1QxhqhjDVDGGqGMNUMYILNbzdr1qyWKnuzD/gvt5JE7G3x1EDm44uYtBzkji/Hsb2LK8SqZMfr1sW35wg9l9ORJeYfmAS/GEP+Cp7swCzNNKkKc0v11bH11bH11bFlFE+bWFSUyLzKSgUcZOQt9dWx9dWx9dWxS+KmH7Vq0Wcu1aX11bFm1NRNumvIZBtMTjs0sxr06gC6BagVeShRoBt8dRA5uOLmKBgwWqQq0Prq2LNw+s11uVU9OoAusYrpLo/zJv11bH11bEV1axRrVqFSWrR+urYsqoqBtwKUhkX05El4tuipBpmpNWv6dQBCEJYQlg76k9JrLtSn9dWxaJUUjTxp0q/2Ln16xdlqdWh9dWxZNRPm1dXlMip7swCxLNOkKUkvptwgwiLBWjNWMCxfmlbF7+TEsUEJaM0ZK1D024RRdDclo05YvRbR1FqrJMl6bcItSXrobjrmlb1U2h6qbY9VNoXGTzys7DxxN9NuEIbiQSyIlF67hcreqoCzTp5soqJyfXXYnfVTaF3DxM86/7imIQjGMIQ9NuEem3CPTbhFpKVVCXD5hY9VNoXmUSB9eTahMWv4Oj5d1KpWa65Spem3CLXkzaK6pDir6qbQ9VNoeqm0CpwqcowrFRO5W9Snnp1PVTbHqptC4ismKzSUSSb6bcIsqlKZFXVpzYqe7MM3Y4MqYsX5pWxe/kxLFteDIOKvyVAwOaN/F7+LE+y0fByOHD59Z+1Q+ej2X048ldlr+Do/befhc3ZZ7hBTDn5GtZtbzlH7KnuzDN2ODKmLVudGbimoV1TbrEF0XGkuJcKm0wW14Og4q/JUDRUCqY5Ug8b26xA81khcJNopDZ1I/A4GsttyrQpKot5cJqobXKEFDbrEB+2rxVTxtSJmrWvYoVrmq4RUVRXD9MgnakfgcLRXm3AtFVCExHOvk4nEzUj8B8iZTzhgmapTQlq05o7dYgS7lNBWPlyBIX048lYQGS43GXrGEvUj8DFSjyO1k4geFW7DHpVZ6U+3WINusQXKf7XX21Eim5s9wgphz8jWhRo1K9alRp6kfgYdunajOpNPns1PdmGbscGVO623B0HFX5KmbJcsMYvt5JE7G3x1EDm44uYtBzkji/Hsb2LK8SqYe3LV3Nt+cIOL6ceSsWL8ArZm/EQpeRO99nuEFMOfka0Efyyb3VPdmGbscGVMMlmVHccNlpNDmxoc2NDmxSuRSY0kGvU3yWGijdX+KkNDmxoc2KSBPaipBer75LB/Pam7zJGtIGpaiu5EWgqSaHNhMKRIppEnFUJxPph8nDQ5sUmbVtnPK6K2+SwrT7ejLSoaHNhjtao1UechUD25au5bKzKhLqeqTb5LCur7c/hHoaHNigr6j/lIr75LDfJYb3LzQGkzR//APbBYsuZS0o+fmyxmDWeEqjGnoc2GW252yhUUucKlkzR9SOnIErHGyxwtXiHSvyt1ENKk2+SwY9xaTvOHC0gqe7MM3Y4MqYsX5pW7Lj83XsUfip5vfxYn2Wj4OR7bw8HOYsN+y4ex7ctXe2xnI1TF9ORJeYfmAS/GEA8+JL/AGWF+Jyd91uDKuLE+ZWcVPdmGbscGVMNp1qzYMV66buV6i2ToVXMjnDSkLj83XsS3jecssJYbleo3K9Q43+4XKSpk1HKFclzICbSTiO5XqNyvUbleo3K9Qv3HcrgTaicfFhv2XD2KVp2mpHzJ4xXs2zZKNWeAZyUUWHMlpxvTDMDZYKA2DlY2mhzMJAc5ugaUtMMwPNJKIrlUk4nD8wCX4wgHnxJf7LC/G5O+63BlXFifMrOKnuzDN2ODKnZY7jiji4/N17/AILDfsuHtMfr1sW35wg91zObrYh+YBL8YQDz4kv9lhfjcnfdbgyrixPmVnFT3ZgFepPSSlGpT9au8HXO4z5ecsczY7jijg20mwdMVTJr0OzxUhCFSeEGSVLm3YiFzPodni7zcQUtuFayf9pOWVZKjVinetXePWrvHrV3j1q7xF6O6aEYRBQ2aJGKZkr61d49au8etXeLOKymqIilVUBczm63iR5O2SSWSSu7nSZo1aFfKatrCVCrBO9au8etXePWrvDarVq7eSK1ZYmnpJChPT9au8HHQ4z5ecscFifMrOKnuzALfhlTFOnUqzwkp/Tz4qljNGEI1RZQ4UoN5QlrfU00STyVJITyCr8lQMOeSm8UGef6mmi8takdbRSmU+nnxVoV6MYQqimTN1ZYT0/p58TSxljGWaWWaaaEsv08+KhM3SljPU7/AKefE5I5TljPOKVCtWjGWl9PPiy1WmRQlOQ59TTRcUsYMvJYrUPpx8fTj4mInZJYzTCnSq1puil9PPj6cfH08+KlKrSm6KgayinyNtFlnWlAhOjqMkn08+KhM5SkjPUFifMrOKnuzALfhlTFrOcJI6ZRfSSWVIRcQjGH46phbbg6Dir8lTHVMLKcrMjplF9ZYQUkTFpJJIsgj/PTKHD59ZDc5CijplF35JJWOc76Hz0R0yi5NOSVjLv8CxsIRcamOmUXyh0uFLHVMLYySTMhHjHplHTKHlTpytNf/gWb5pSHTKOmUdMou/zg7jqmCPNH6snDplF1JJJWMq/wLE+ZWcVPdmAVaVSslqFKnrh7C3rKdKW7U04eF3kBYXE1KpJmuHsFdEVUUxIXUgxn41E1ppBI5sxkipGEZ54wJEjR83RKFdcPYWoaTiRXHXMqQvt5JExaPg5HC1b5411lUr0kS3zxLrSVXrC5qUoK7SMkyGuHsNcPYa4ewVUdSRzX+VRxRjCWtTjHZjJDsdqA5G8ooyPrh7C0bUcKIuH66kLuNRwLa2n10zXD2DQdSC2W+RR1nZbJGy2SHRcFoHW4sFS4tgsJyM6ZDihsxkhEcqKvQMRSxcxmOZWdps4Q1w9gYoVi1erQrI/lk3F1uDKuLE+ZWcVPdmHfe/kxLtYHNG/2X28kiYtHwcj9m9HMe22/OEHuuZzhb77C/E5Oxz8jWgj+WTcXW4Mq4sT5lZxU92YZca8WbqRXUzG824GhcNLdhsyWJi9/JiWEK0i6uJJNTL6Mcomh0zRgGyqUUdfTFKvvNuBp3KSXSpTkCguQwFV2m0+sS0Y5QlvQhbspK2VPebcG824CN6UA6dKlJA53EVbSTVUzW824N5twbzbgVG2cuebi4EnRjlCsnVkpSNkK0ksZ55ZYaNcoadpF5EcSap1+13WlXV1xKCmX0Y5RoxyjRjlGjHKHTbFZbCXFSNiwvxOTsV7MOE+qnzlMjZNxljpSvOHohGnA3TqYV0Y5Rbi3qq0z58wdFT3Zhm7HBlTFi/NK2L38mJYtrwZBxV+SpmyXLDHZdjm6jluchRcXg4Oc7LK8SqYe3LV0UPnpCH3Lz8LmxYX43J9up7swB8xMVImzEu9VsOW66o4kcwl1wznibaZs0ZLb1Ww73aadahROmRbXg6DiaxaPGYaJRxolHCigUbVUpF1P3qtjeq2N6rYcq/XcSvXU6+G5yFFw6m5QcqPVTK+iUcaJRxolHDSaxdrJkxCgHty1dFD56Qhm4bwNtJMJmy29Vsb1WxvVbG9Vsb1WwUrRrlS9aOLz8Lmwy34eaEp+BXeq2N6rY3qtjeq2N6rY3qthoXZVV9wkUuvmp7swC34ZU+xbbg6D23v4sT725yFF+w9uWroofPSEM3048ldsPzAJfjCGbz8Lm+za3nKP2VPdmAW/DKnZaVvIy8qKNFU1gxBdZBSUJeKlkwW14Og5eZ42ntZZOFNmvoLDwci4WkLKYtI1W+vFVWdV1gxBrBiDWDEGsGIFVgM9MS1BQJbNfQtq93SsO0oSUBd5zLiDIixStmvoWsW1Rbbk5pSD25auih89IQD7UDiY0lc6S2a+gwDxt9qhtPdGsGILst9HQVohQSwwWE0lVqJh09PbJiSyAzcV6FTNcvQbdw3mcX0gtXF5+FzYtC1kFfkXIqusGINYMQawYg1gxBrBiDWDEDxa6C1EA2tIWzX0LRuxwryop0VQVPdmAW/DKnZYvzSti9/JiWLa8GQc3C4Uv9lif0lvtc3HFzFoOckcX49jexZXiVTD25auih89IQFy+DL2LGcjU8X05El4tfwdHE34iFLyJ0NHlKFi8/C5sWF+Nyd91uDKuLE+ZWcVPdmAW/DKnZYvzStialSnj/M3+YuLiVKlN6rskn99cf31ww6lSd4oMk/+YuL2UaNNrk+gWJ/SW+xwV60F9YhBvVq0y+jQj/mLiWjSkj/Movx7G9iyvEqmI0KEYxjH/OXxGWE0Iwm/zFxe6SSggJcaP99cWQkkroKpGt/mLiWWWWH8SzfiIUvInQ0eUoWLz8LmxYX43Ji71WrK9zsJf764/vrhHr14qyd/Imllmh/E3+YuJaVOT/7IKnuzALfhlTssX5pW7Lj83XsQZzqDSQFtJcqQoKPrdoi56gScyEWJIXo11CziWppJNXgfBx0t1PMTljfrdohcq06y2q1aaDVp0VxJq1fW7RHrdoj1u0RdWeR0SI8G/wCjXULaKZBtt+ciuet2iC5mgaoU65eMYQhGMfW7RHrdoj1u0RdI4VdCQQKoPo11CzaWopiIp0jwNuttkjFQsanezRjJNCB+aWc8bnlbFeiXcaNWret2iLruVAU2nMXIizC4jpMi9BR9btEXRUCSi8DZklhKnkpqZCef1u0QTdTcPGJCxTNT3ZgFvwyp2WL80rdlx+br2KPxUxcLhS/iyXLTHZdjm6j32G/ZcOL0cxww+HIIMfr1hHNjORqnZcznC3961vOUfsqe7MApUJzKcdoU9MPIaYeQ0w8hbRjLrWUT5hRy8LWuhYcqooldMPISQjLJJCLsTDKs21VPK6YeQttb1wNperHlAOh8ozWrFaKhuloh9LhJechtRJAnaJ2nChY1SOWidpImZN1ggIJ5wKdJOI6YeQa8k9rahuo4t0tEOJvqNx1GK6g6YeQSrkIDYTiqEoT3kadanPSl0y8YhYtc50ZMNKJsWzdSY11c6bUN0tENd1pjoKVzSeLmc3W8ULPO+vRpVpNMPIaYeQ0w8hph5B0M5Ya0xSVSyRtI7D5MscoaYeQ0w8gyLYuZDcyeonM1PdmH/BfbySJ2NvjqIHNxxcxaDnJHF+PY3sWV4lUw9uWroofPSEBcvgy92WL4+q4uZzdbEPzAJfjCHbfn5272NPjKJ31PdmAOmP8AKTNGBvicb4nG+Jxvicb4nG+Jxvicb4nG+Jxvicb4nG+JwyLmzOtXqEIh+W9i7zJGtDQ84djf9OLZhLwm3tmIpxImFK9kx9OPEsNBxxbS5QVIb4nEJ9vR/qGh5xBzTWsjFvDfE4W1L6srnlAUPnpYcyNFdQj6XDQ840PONDzj6tNaT+Ugb4nDmWvry2dVBD8wCX4wgFpQilpCgfhvicMy6UzoW5EyIvz87d7GnxlE76nuzALfhlT7tkuWGOy7HN1HvsN+y4cXo5jmh89HuvpyJLzD8wCX4wgHnxJfxZrmtLF+fnbvY0+MonfU92YBb8MqYYqORW3OQTz2nGSNOMkacZI04yRpxkjTjJGnGSNOMkO21zTSm0rHyoslywx2LdtmuuKNVQPacZIVy1IorKRali3qGQX3OVTj+nGSG0y0NsTmp0wOC3rbcR//AHKOnGSNOMkVbQsujTnqybhe43C9xuF7i1z6cLlWTxVTF9ORJeYfmAS/GEAfJUFAkZJGNOMkIFu203lCB9PF+fnbvY0+MogU69Qqmna9HcL3G4XuNwvcWte6+5lFSoKYqe7MAt+GVMWs5ykfZuFwpfxZLlpjucPn1nNoOcke8x+vWEc2M5GqYvpyJLzD8wCX4wh235+du9jT4yiBd8Kp9lifMrOKnuzALfhlTFrOcpGL1nzxJLR5inqNwj1G4R6jcI9RuEeo3CKXx0xcLhS/iyXLDGL1qakRUUaBP1G4Ras0ZNM0lWMiduN6pPPPO4m636TfWalMWg5yR7LvK6sTdn9RX1G4R6jcIouJfmrUoR9MtsemW2PTLbBNISiM81QmL6ciS+yVwr8ssJZfUbhHqNwj1G4R6jcINqKge6InMtPjKIF3wqn2WJ8ys4qe7MAt+GVMWs5ykYvt4lF7qXxUxcLhS/iyXLDGL7eSRMWj4ORy5uOLmLQc5I9l6OY5oR/itSH19CFFYSK9SWlRzfTkSX2QRVmaEIw+hrQ+hrQ+hrQ+hrQ+hrQ+hrQrlzBapGlXDXW0ak3EaSotriLOjqUsmbE+ZWcVPdmAW/DKmLWc5SMX28Si91L4qYuFwpfxZLlpjF9vJImLR8HI5c3HFzFoOckey9HMe22/OEHsvpyJLzD8wCX4wh33g5yd77E+ZWcVPdmAW/DKmLWc5SMX28Si91L4qYuFwpfxZLlpjF12evuI8l1UvVD4DUdSMyUWihL23GOCxikaLUDNFcLVjaKqlqOqHwGm3FdjrVBeX9uMcN54ITknMyJYvRzHMssZpoSw1Q+A3ma4GotEV5Y24xxtxjjbjHD1IGriKBZSbOqHwNUPgape4K3SZpMtQK1id0GceNlylALq8moBGJ5R24xxtxjjbjHDsbiu+FqsvIGqHwDRasUM1y1bssT5lZxU92YBb8MqYtZzlIxfbxKL3Uvipi4XCl/FkuWmOy7HN1HDb46iZvDwc5iw37LhxejmOaHz0cXL4Mvdli+PquZvxEKXkToaPKULF5+FzdlnuEFMOfka122J8ys4qe7MAt+GVMWs5ykYuGzDTuJEKBfRKuNEq40SrjRKuNEq4kl6ZJZRcLhS/iyXLTGHpcEo0TBOjX3slAyyTdxq87mJ6JVxRvCnIlKmkVCF60w6eKFJReHg5zFhv2XDi9HMcItnVNXSiSjTp2LV5Kkk2HUjVV1vqKXS0Srh5W5PNIiWNmBb64xNpJpwpX3slBuLlJfRyqnSm/EQpeROho8pQsPps13QhRTaGiVcPVjG2hOQlMBk3TINlAoplbeyUFY5KfUzxyQpQiZNFy8uiVcOW06i3kYyqVhYnzKzip7swC34ZUxaznKR9m4XCl/FkuWmMX28kiYtHwcjhw+fWQ3OQouLw8HOYsN+y4cXo5jhh8OQe2+nHkrstfwdHE34iFLyJ0NHlKF2X5+du9qP5ZNxdbgyrixPmVnFT3ZgFvwyphAWzSCql1Mru51DdzqG7nUN3OobudQ3c6hu51DdzqCxdpxrCYcTjAslywxi+3kkTFo+DkcOHz6yG5yFFxeDg5zDTeio1Jzk5DdzqCI2ylzCsy+s6PbASEyikphNPo9l9OPJXYhXUcCEllk0ru11CvVmrVqtWZOPVU4+UO0d3OoMC5a65XDInHRfn527hh2xRHI3aCkb0e2Bo9sAtZZtljFCvIHChFXAkmEw1o9sBpMBJahoyYJCp7swC34ZU+7ZLlhjF9vJImLR8HI4cPn1kNzkKLi8HBznZZXiVTvvpx5K+zZrmtLF+fnbuLPcIKfZqe7MBVpU61KpSqa2Y41sxxrZjjWzHGtmONbMca2Y41sxxrZjjWzHGtmONbMcJLQbaKZmNJoWGugLlSjUVNbMcJiWnpJSQmQFe3jMr1qterQt6zC9elXohUSU5XJzE1DWzHGtmONbMcJKKlopaJZO7lhBSFyhToKetmONbMca2Y41sxxrZjjWzHGtmONbMcJTNbKObgbTgstlCXY0IqmtmOEtJTkgpKTT/sVPdmH/ALFT3Y//xABEEAABAwEGAwUEBwYGAgIDAAACAAEDBAUQElSTshEgkhMxUVJTMDKx0gYUcpSzw9EhIjNBVZEVJDRAQnEjNWBzJUNh/9oACAEBAAk/ALmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMm/+ADiaKI5HbxwNxVgz6wqwZ9YVYM+sKsGfWFWDPrCrBn1hVgz6wqwZ9YVYM+sKsGfWFWDPrCrBn1hVmSwOMBS4ykYrrOkqHnjI+ImwKwZ9YVYM+sKsGfWFWDPrCrBn1hVgz6wqypYCkAyxlIxe43JZcs5dkMmMZGFWDPrConjGpiaRgd+LjxX/ABF3Vgz6wqwZ9YVYM+sKs2SneGB5sRGx88byDTQHK4M/BywNxVgz6wqwZ9YVYM+sKsGfWFWDPrCrBn1hVgz6wqwZ9YVYM+sKsGfWFWDPrCrBn1hVnSU7wRNJxI2Pmyc2x/a5CTcN2Wk5/Rn2cmTiuyYL0y+HJkH3jz5Cfb7XJhv5snNse4zCGbHiIO9sIu6rq/qBV1f1Aq6v6gVdX9QKur+oFXV/UCrq/qBV1f1AqusKWngcwY3G7ISbhunqI3gBwFolXV/UCrq/qBV1f1Aq6v6gVbWucFLLKPEg7wC4IymjExZpG4jwNuCpaDoJRQA1METh2Q+e6qqgl7MQ4RuKrq/qBGRR08TRi5d/Bl3Ozsq6v6gVdX9QKur+oFIc89Wf1U2quBDg99UtB0EqWg6CVLQdBKloOglS0HQS4YpIgN+HiTcVkJ9t0koRPBIfGPv4gq6v6gVdX9QKur+oFXV/UCrq/qBV1f1Aq6v6gVdX9QKqqzlhwYWNxuyYb+bJzbHu8ZdnscoV2Qk3Dz/06p/Dfk9On9jn/wAsubLRbWWQn23ZSb2PjFvuyYb+bJzbHu8Zdl1dLTHJUGJuCt+r6lb9X1K36vqVv1fUrfq+pd7iyyhXZCTcPJa9RBAAx4QBW/V9SNzkkooDMn7yIgZ3df06p/De6mCeAopncD+wrApU3+GvVPK07wfsx4Fb9X1K36vqVv1fUpSkmlpQIzLvJ0/B2AnZW/V9StmplglmdjArs/8AllyWPBNOYljMlYFKm4CLMzN4MyyE+27KTXWhNTNKE+PArfq+pW/V9St+r6lb9X1K3aogOojEmxd7OV3jFvuyYb+bJzbHu8Zdl2aPbzeVllCuyEm4eQX9yLYgL+ykH/19P+GykD/19T+G93oz7EY/3RZi4XdAX9lkwXpl8EBf2TcGad9jox/ujb/X/llcLugL+y8h7r8hPtuyk13kqfiHLmotzXeMW+7Jhv5snNse7xl2XZo9vN5WWUK7ISbh5IIyfxcWdUsPQynkYWrp2ZmJ/O6nkdn72xPcTi/iz8FUS9bqQy4d2J3e6CM3+tyd4qlh6GTMzN3M11LD0MoYwMYR4EIsz++yqJet1KZN4ETvdCB8K78tUsPQyFhZu5mbhfkJ9t2Umu8lT8Q5c1Fua7xi33ZMN/Nk5tj3eMuy7NHt5vKyyhXZCTcPNn6je/PasEEz1RlgMlb9H1qUZIZBxAY9xM67mVv0fWrTgq66pjEYYInxGb4l9Hq7TVmVFNGZ4BKQcLOV1pwU0h1mMRk+wrfo+tThNAfuSA/FnvyE+27KTXeSp+Icuai3Nd4xb7smG/myc2x7vGXZdmj283lZZQrshJuHmz9Rvf2OTBemXwuzD7Huz/5ZcnkPffkJ9t2Umu8lT8Q5c1Fua7xi33ZMN/Nk5tj3eMuy54GOCczPtSwqSg1iUlBrEpKDWJSUGsSkoNYl3szMsoV2Qk3DyRVjzRd7xxi47lBaOkHzo6JoK2QqmLHK7FgmfGKOhwQQnKfCUu4LniacxMm7R8I8AbipKDWJSUGsSkoNYlJQaxKSg1iWHtoKcQPC/FuLLvcXZSUGsSOjeCCXEeCS54Wkiqu1LtSwtwwKSg1iUlBrEpKDWJR1JVtFxGV4AY41BaOkHzrjhkATbj4E3FZCfbdlJrigZqYZsfanh99SUGsSkoNYlJQaxKSg1iR0OCKcDfhKV3jFvuyYb+bJzbHu8ZdnscoV2Qk3DyeSLZd/T6b8Nl/Tqn8N7vRn2e39Udt2Wi2sshPtuyk3sfGLfdkw382Tm2PdAMxw4uAE/BnxNwVh02qSsOm1SVh02qSsOm1SVh02qSsOm1SVh02qSsOm1SVkQRhUxYHMTK7ISbhuoIp2niI3xk4qw6bVJVp0ctS+B4Iwxi3ZK3ajRFWTBKFBxpRMjJnNoP3FZMEQV7tSFIJk7g0/7it2o0RVYdbLA7RNBKGAXab9xWHTapKhigamGJ2wE5ccd1mwzj2ASYzNWHTapKIYyqYBkcB7m4r/AIi7qw6bVJWTBEFRJgcxMrqSOd5qjssJk4qw6bVJUkcDw1HZYQJyu9Udt2Wi2sshPtupgnNojjwG/D31YdNqkrDptUlYdNqkrDptUlYdNqkrDptUlYdNqkrDptUlZUEITYeJib3ZMN/Nk5tj+1yEm4bstJd6s2+7P1G91n6f8RrsxBvu9OnuycV2TBemXwuzD7Huz/5ZXZ/8u71R23ZaLayyE+32uTDfzNxCQHAm8WJuDqyn1jVlPrGrKfWNWU+sasp9Y1ZT6xqyn1jVlPrGrKfWNWU+sasp9Y1ZT6xqieGZ43ByxkV2WkutF4oAd3EMAOrYfSBWc51NXTxzzH2ptiklHGSs5wqqSmlngPtTfDJEOMVbD6QKreqs+YDM4uDB+2McQ/tBWU+sa40T1uNp3/iY2i+2rYfSBQvV1rTFD2uJ4/3A+wrKfWNBgghBgjHjx4My9MvhdmH2PdTvNFHJjFsTjwJWU+salejpqin7eUP4nGTE4d5q2H0gUvaVEr8TPgzcbstFtZBihmjKOQe7iJNwdWU+sasp9Y1ZT6xqyn1jVlPrGrKfWNWU+sasp9Y1ZT6xqyn1jVlPrGrKfWNUbwnKGA3xkW7/AGuWk5MhTfhsv6dU/hvd6M+y7xqLs5Jf6ZfC7MPsfkyDby5MtFtb/aO7O1JM7O32HVqVesatSr1jVqVesarJpmamHhjNyurZ4hejF+AG4q1KvWNWpV6xq1KvWNeVlIQGNKTiQq1KvWNVs8oNQyPhM3K6jhmcW4C8gMXBWTSaQqEIo2CLgANhb3bv6fTfhsv6dU/hvdMcUjdxATi/92VqVesa/wA40QQYGn/8uBWTSaQqY6SD6rGXZwE8Yq1KvWNWpV6xq1KvWO6Qo5B90hfg7f8ATsrUq9Y1WTzC1B3Gbk3vjdkG3ldZ1NJI4HxMoxd/eVk0mkKZmZm4MzI3ExoZnEm72fCrUq9Y1XTyh9VmfCcjl7GU45BeLgQPhf31alXrGqyaZmpB4YzcuYXcipJmZm73dwdWPW6JqzaqKIe8ziIRa7KhdkR3XWZVSRG3ETCIiF1Y9bomrZomdhZv4wq0aeepmpnGKKI2MzdWPW6JqE6KB6MwaWoF4hxOTK2qLWFW1Rawq2qLWFUk1XSmMeCaAHkB+Aqx63RNWrSRzRUUASAcosQEIMzs6tejIzoKgRFpR4u7xvyVkMGMIMPaGwq2qLWFVMc0f1SJscZYuSx63RNWPW6Jqx63RNRnQwnRYAOpZ4hI8Yq2qLWFVcU4DQ4XKMsX7cZXeQ994EZnQzCIj3u7irHrdE1Ty0dM1NKLyzi8YK2qLWFW1Rawq2qLWFTxzRO7sxgTEPFrrXowMXdiF5RZ2dlbVFrCraotYVWwVVVI8eCGE2My4GrHrdE1QzwCVILM8gOHsPNDvuyo3ZEd13oFve7zOs4F2fDYXJ6s2+7P1G9/ZecfjyZ/8suTyHv5c5DyZifddnpt9/jJs9l5od907xBLAIBwAj2q0pdCVTvLEFKwO7gQbrvQLe93mdHgggqROQuDlwZWlLoSqR6qsinacgIXh4Rj/wDYrLDXiVM0JzC5BwMT23VpxzgcjkLQmStKXQlVnAdLVzHPCbzRjijlfGKs0BihiKQ37eLuC6FpagxIhFyYPdbj3krLDXiVKMPb4uz4SAfHB9m6iGWDG4YnlANzqyw14kGCeE3CQeLPwdv+l3MTO6tKXQlVcZ1E5YQF4TG7P/lldRjNFFJgN3lANyssNeJRNHURCWMcTFdaMmICcf4EitKXQlVpS6EqrDkn+sxHheIw5MxPuuz029NxOQ2AW7uLk/BlZYa8SoBjp4nPGTTRl3h7LzQ7+b0C3vd5nvyEm4bstJyZCm/DZf06p/De70Z9l3jUXZyS7OSX5h9j3Z/8srs/+XyZiTdz5ifddnpt6zUW5vaeaHfdXDTPDEx8XDGrfi0Fb8Wgrfi0FZZVZ2dxiecZcGNfR2T7y3yK34tBW/FoK34tBVDWiM3GlaEB7H3+pfR2T7y3yKgKm7CMg4PJjutcIGkI2wPDi9xW/FoI8bwU8cWLuxYBYeKPA9RTSwsXfh7QXHirfi0FWhXhBxi7AAeF37ZsC+jsn3lvkQ/4Z/hnnft8fb9HkVvxaCrBn4zFJjYMF2ckvgeZqaRzeNiw4l9HZPvLfIoP8Nej/wA28pl2+P8A4YVb8WgoP8Ses/zTSAXYYP8Agvo7J95b5F9HZPvLfIvo9J95b5FbsQNUf+bC8HdjVuRyNTQHLgaDvwclohTfVXi748eLtFb8Wgqpp3CSQ8bDg997rdiBp5zlw9h3Y1b0RdlKB/wLqZ52hw/+NiwccRcF9HZPvLfIrMKmeCFpOLy4/YeaHfdlR5Mw227ytfnw2FyerNv5cxBvu9On5M5Jy5B943ZBt5cmWi2sshPt5PNS/mc/jFvuyYb/AGHmh33PExygwFjDGpKTRRRvJHU4BwBguzDbbpKTRUlJoqSk0UcDxBK0jYI8HIdO0AOTtjixd6kpNFSUmipKTRUlJoo6d4DISfBFhfiF3p0/I1X208jmeGVNWcRD1rsfYTyuJ4H4P3Jq3WTT9pLF2RdoeO5p+0ii7IezPAmrdZY+wgNmDG/F+67LRbWWQn28nmpfzOfxi33ZMN/sPNDv5M8+y7MNt/2Hp0/L6ZfC7MPsfm9Udt2Wi2sshPt5PNS/mc/jFvuyYb+YnEwpZSEm72dgdfSK0tc1bNbPAfvRyTEYvyZ59l1iUU08j8TkOISIl9HbP0BXmdQhLDJVAJgbcRJl9HbP0BVlUtNK9aAucUbB7O0KileThjeGRwxcO7jwX0itLXNfSK0tc19IrS1zX0itLXNfSG0dc7p5IZ434hJGTiQ/9Oy+kVpa5r6RWlrmvpFaWuarp6kwrcIlMbm7Ngu9Udl30gtERFuDM05q3a+SKQXEwOc3EmfktGppWl4Y+xkIMWHu48F9IrS1zX0itLXNfSK0tc1IRyHRxEZk/FydxROJBTSOLt3s7CvpFaWuatmtngP3o5JiIXuyYb+bJzbHuAjJ+5hbi6o59MlBIDP3OQuN1TFG71vcZqup9UUYkL9zi/Fnu8zo2EWrA4u6rqfVFSBObVwPhifG/uEqOfTJQmDv3YhcfjdTSmPiIO7Kjn0yTOzs/B2dM7u78GZlRz6ZKmlAfEgdm9hRz6ZKlmEW73cHZmuiM3ZuLsIuXwVHPpkjGAyre6V8D+4q6n1RUEksRSjhMBch91Uc+mSo59MlSTMLNxd3AmZroyMvAWd3VHPpkqOfTJUc+mSjIC8Cbg91bAJNRQ8WeQfKqyAiKmkZmaQXd3wqjn0yVNMIt3uQOzXZMN/Nk5tj3eMuxCyzR7bnTuvQLe93me53WQk3ChZZeS4W/izb0LLP1G91n6f8RkLL14N/P5x+KFkLfwQ3tdkH3ihZZBt5J3Qt7h70LIWQN/oJ9t2UmQshZCy9CDZc7rNRbmQsh9Lfdkw38w4jOmlEW8XcXZlYU6smaGCPHjN/sXUR1BxzmRsCsKdUhwSkGNhLwutWOOeKJ2MFbUS7nJ1E8k8pYYwbvJ1YU6s2WCF6MwxldlpLvVm33WLOUclZMYF4iRqxZxjirIDMvARO6mKecpoXYB+0rCnVhTqwp1SnBPhYsBd/B7+5jZ3VtRKvCpr6oGCCEO83YmJWFOrOlgiOiwCR/bG6zpZ4gosBEH23VhTquClr6ZiaaE+8FbUStqJWvEc01HKAD4k43VAwwNTSjjdW1Eq0J2hw9ph/ljusuaeAooWYx+wrCnQOEsZuBi/8iH9jss1Fua7xi33ZMN/tMiO7lzgcmWku9Wbf7HJxcuYfY/N6o7OfzUv5nJnpt6zUW5rvGLfdkw3+whkkiiceIx8MX7z8FZdof2jVJUxFDHjd5cN2RHddX0IRVAYhE3PFtVpWb1SfIv5PwQGcdNOMhCHe7MrLtD+0aoqqIxheXFLguqqWJoIjAmmclaVm9UnyKmnqKqmJzOSmwvHwk+2rLtD+0asu0P7Rqza9jnmCIXfB3ndDLLEBgLjHwxfvurLtD+0asu0P7Rqy7Q/tGpoaanwtBgquLHiD7GJWlZvVJ8iMCkp5XjIg7ndl3u7MrSs7qk+RV9CcVPLiIQc8XNXUIRTmziJueJWlZvVJ8itKzeqT5FaVm9UnyK0rN6pPkVZRyRNKMeGJzxcTu81L+ZyWhQME9RJILE8nyK0bPwxTAffJ8l0sUcs2DgUnHC2EuKtKzeqT5FVUsozwNGLQufsPNDvuyo3ZEd13oFve7zPfkJNw8nki2X5+n/Ea7MQb+TOSXZyRecfj7XOQ3eal/M9uLOUUByMz9zuI8VY9F1GrNpoglw8TByupYpymjYHaRWPRdRqmihMIWiwx3egW97rZq+gFbNX0ArZq+gFOdbNMX1V452wjwP7Csei6jVj0XUasei6jUARHKws4B3Nha/P0/wCI105wgZgeMO9sDq2avoBWzV9AK2avoBVMkwPKUmI7s5IvOPx5KWKcpqnsnaT7Ksei6jVj0XUasei6jVj0XUasei6jTMzyRAbt9puN+chuo4J/rTx4u0f01Y9F1GrHouo1Y9F1GrHouo1Y9F1GrHouo1ZtLFHPi4mDl7DJzbH9h6Bb35c+GwufP0/4jewzki84/Hkz/wCWXNlotrX5yH2PjJs9hk5tj8lG08ccAkDORDtVhR6svzKkaCEqRjcWIi3XegW975XinhpnKM/B1bsunGrSOeETxsJCDcCuoBneKUGDiZjtVhR6svzKwo9WX5lYUerL8ysKPVl+ZWQEVVS00s8EmOR8EkQ4hJW7Lpxq1ZJ4DimdwcQbuC6uOn7Z58eFhVuy6caqinnapMMb3ZyRecfjdM8VRFELgbfbZW7LpxqZ7QpYKZ54oz4BhkxMPfGrCj1ZfmVG0EUlHjIWIi4lje6yQlnkEsZ4zVhx6svzK2pQiikIAHBH+wRVtSnDLWRAY4A7iK7OQ3UA1DwPBg4kY4ceNWFHqy/MrCj1ZfmVhR6svzKwo9WX5lYUerL8ysKPVl+ZUI0doU+DspxMzccZYe41bsunGrROoCKmEwZxHmyc2x+TKhdkR3XegW978oXJ60fL/Tqn8N7vRn2XeNRdnJLs5IvOPxu9EN43ZB943ZBt5XeQ992Yk3LPwb7s5Dd5qX8zn8Yt92TDfzZObY/JlQujEn//AK3FQx9LIyEWnbapj6nUx9ToyIXrAUMfSyiAf8+GwrvWj5JT/wBdUb3Upuz19PvZQx9LKMGfxZma7xqLs5JdEDv9llDH0tczO3g6hj6WQsDvX94fYJTH1OhY3au7z+woY+lkzM3g12Yk3LPwb7s5Dd5qX8y6Qv4EGxTH1Opj6nUp/wCqi/m/ma5mdvB1DH0sgEf+m4c2Tm2PyZUOTMNtusOt0nVm1FNSU9SJzTSg4gAq3qLVVQFfUhVjKUVO+MmBhVhVuk6opoCOUMDSDhutalgmDvAzZnVvUWqjYgOtnISbudnN0bBGFbARE/czMbK3qLVVvUWqreotVO1ovTvM8zU37+DGrCrdJ1VR0FU9QZtDO+A8Lq3qLVUoyRSDiAxfixMu5lb1FqK3qLVVvUWqpgtCeKr7WSOmfGQhgVhVuk6o5YDKtxCMg4eLYLrYpYpgfgYGbM7K3qLVZOziU8js7fzZyUghFHWwkZl3CzEreotVWpTTzfW4iwAd1fBTPK9Ng7QsOLDjVvUWqqmOeEoYWYw+xeTCA1MTk79zMxK3qLVVr0s0x+6AGzu/sMnNsfkyo8mYbbd5WWUK7ISbh5PJFs5/Tp7snFdkwXpl8OTIPvHk9UdntvGTZ7Dhjlp5AH/shdk1JrJqTWTUmsmgwTQMAYDxcjU3YTzYgxSJqTWXewsyw9vPA4Bifgyak1k0HYlSnG2A8VzTcZgcgwDiQ1emsfYSCGHG3DuG5qXBPEEocZf5GmpezgiOU+Ev8guwduYkTY3wtwBuKak1k3/sBBoOwfH/AAUNXppg+qYBgftywFjBNSayGf63QRtBNgDEOMUNXxMcP8NfVNZNTdhAOI8MlzS4JaR4hwfbZ0NXpppWjil7MsY4bvVHbc1JhMGNuMqak1k1JrJqTWTUmsmh41DG4YDxe5yNS9lPEMgcZU1JrJqTWTU3YQuePBJ/t8tJyZCm/DZf06p/De70Z9l3jUXZyS7OSLzj8bvRDe3Jn/y7vVHbdlotrcvkqfiHJkYdvsxxdlCcmHxwNxVgNrqwG11YDa6sBtdWA2urAbXVgNrqwG11YDa6sBtdWA2urAbXVltT4YClx9rjutFqbsIyD3Mat9tBVHb9kwPjw4eOJrrDY+wgjixdv34BVhsHb08kOLt+7GN1N2/ZgY4MWH3x4KwG11/+N/wxv/ux9urfbQVK1f8A/v7bF2XvqwG11F2f1iYpMHHjh4rzj8bp+x+sAw4+GLDwJiVvtoK320Fb7aCha0frn+ax/wAHD/wVgNrqDse3JiwYsXC7LRbWUeP6tTnLg7uOBuKsBtdWU0HGE5Mfa4/cu8lT8Q5MjDt9nk5tj+1yEm4eTyRbOf06e7JxX+cfjzZBt5cmWi2sshPtuyk13kqfiHJkYdvs8nNse4SeCXHjYSw9wqnqdd1T1Ou6p6nXdU9Truqep13VPU67qnqdd1T1Ou6gnaeCBzDFNdkJNw8kM7zycMWGVxVPU67pnaOGqmjD7IG7NeJlAccpOwFh9wVT1Ou6jlF52BpMZ4/cuimKfAwcQlcW4Cqep13VPU67qCpxALk3Gd1V0+gKq6fQFVdPoCpojiio3lHBGwftx3ZBt5cmWi2smd4Z4ijNmfg+Em4Oqep13UU4zsBBxOVybgV3kqfiHJkYdqdmOKAzH/sWVXT6Aqrp9AVV0+gKmiMIacTDBGwc2Tm2Pd4y7PY5QrshJuHmz9Rve/0Z9nP6ZfDkyD7xuyDby5MtFtbl8lT8Q5MjDtWVl28mTDfzZObY93jLsuq54CKpPi8RuCtqv+8Sfqrar/vEn6q2q/7xJ+qtqv8AvEn6q2q/7xJ+q8rLKFdkJNw3V1TAxQHiaKUgVtV/3iT9VPJNK8svE5Ccy966xaAjJ3cienjd3d1YtABhQVBCQ08bOztHd6M+zktGqgj+qRPgimMFbVf94k/VW1X/AHiT9VbNe7Obd9RJ+qsKzvu0f6KwrO+7R/orCs77tH+is6lpzIcLlFEEbu3/AGLXZBt5cls17M3czVEn6q2q/wC8Sfqrar/vEn6q2q/7xJ+qtqv+8Sfqq2efBxw9rIR4ePhi5MjDtWVl28mTDfzZObY93jLsuzR7ebyssoV2Qk3DdlpLvVm33/06p/De70Z9nJk4r/OPxVr0OuH6q0qSSQvdAJgIn5Mg28uSy6x2fudoTVlVmgasqs0DVlVmgasqs0DVlVmgasqs0DUMkUjd4mLi/wDZ7rUoxMaOFnEpgZ2fCrVoyJ6aVmZpw8vJkw382Tm2Pd4y7Ls0e3m8rLKFdkJNw3ZaS71Zt9/9Oqfw3u9GfZyZOLlzD7H5Mg28uTLRbW5/Qg2c+TDfzZObY93jLsuzR7ebyssoV2Qk3DdStKMMJib42FWYOqCnKCvgMyOMQc/fVfLomn4xzRjID93ETbiyHFLNRzxg3iRg7MrMHVBU/YUEIGByMTH+2VsIqvl0TVQUjwMLycQceGO7JxX97vwZWYOqCpGhoKI8c8jGx4WVfLomq+XRNV8uiaieppqaDsJSLhHwPFjVmDqgrMHVBWaOqCrpGlhjGM2aIu8FWyFNNIMYN2Rd5XSvHBjEMTC5ftJV8uiar5dE1Xy6Jqn7eglAACRyYP2xNhJWYOqCHDLFIQG3fwIX4Py5MN/Nk5tj3eMuy7NHt5vKyyhXZCTcPJ5Itl39Ppvw2vzEG+706e7JxX+cfjd6Ib25M/8Al8mYk3LPwb7s5DyZifddnpt/Lkw382Tm2Pd4y7LquKB4JiN3NW1SdBq2qToNW1SdBq2qToNW1SdBr+TMyyhXZCTcN1BLO88ZGzgTCrEqtQVVxUkNS+BoZWcibslbVJ0GrJnkOgBqUjEx4G8DYFY1SLzzhEzvIPed2Yg33enT3ZOK61qYAqYmkYCAlbNJ0HdKMR1AMLGXc3AmdW1SdBqvhnGafsmEBe6z5p3mqO14gSsSq1BUJRBOzuwE/F24PdmJNyz8G+6oCE3nCTGbeRW1SdBqsineqaR2wM7cMF1mTzGEsh4wNm99WJVagoHEZ55JWF+9mN+KJmeWQQZ3/lifgrapOg1adPKEOHiAAV2TDfzZObY93jLs9jlCuyEm4bstJd6s2+7P1G91n6f8RrsxBvu9OnuycV2TDlz/AOWXJ5D33ZiTcs/Bv5PJU/EOXNRbmu8Yt92TDfzZObY9wRlNDiwsbcR/ebgqWg6CVLQdBKloOglS0HQSpaDoJUtB0EqWg6CVLQdBKno2hqI8BuAFdkJNw3ZaS71Zt92fqN7rP0/4jXZiDfdFAb1LAx9qzv7ipaDoJSyw1TG8GGm4CGEFXV/UCMiip4mjFy7+Dcuf/LLkgpHhh7nMCVLQdBJmxGZE/DxJ+KYXkp5glBi7ncH4qloOglBSjC8Eh8Yxu8lT8QuqqoJTlkDhG49wKur+oFXV/UCra7FEYn3hdJIEU2HE4d/7r8VXV/UCqKiQp4mjJpXbmyc2x/a5CTcN2Wku9Wbfdn6je6z9P+I12Yg38mck58/+WXscpNd5Kn4hdmJ93tRxAYuJN4s/7HZWDB1GrBg6jVgwdRqwYOo1YMHUasGDqNWDB1GrBg6jVgwdRqwYOo1YMHUasGDqNWZFBM4ODmLl3XWdHUHELiDk5fsZ1YMHUapxggF3cQHubjdYkBSSG5mXE/2kSsSAZIzYwLif7CG6mGenImJwLudxVgwdRqwYOo1YMHUapQghxOWAePe/PRhURxnjES4/sJWDB1GrBg6jVgwdRqwYOo1YMHUasGDqNWDB1GrBg6jVlxQTsLjjFy7nuoI6l4cTR43dsOJWDB1GqYYIBJyYB495f/Bv/8QAGBEAAwEBAAAAAAAAAAAAAAAAARBAABH/2gAIAQIBAT8A3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dZsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgRsCNgX/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/AFm//9k=',
        // h5 预览页面
        previewUrl: 'https://colorpicker-bpx.pages.dev/#/',
        features: [
            '识别图像中的颜色。打开图像并识别/保存图像任何部分所需的颜色。',
            '使用保存的颜色。您可以编辑保存的颜色。',
            '在数据库中搜索和浏览颜色。通过按十六进制值或颜色名称搜索，您将快速在数据库中找到所需的颜色。',
            '收藏夹。您可以将颜色保存到收藏夹，以便稍后查看。',
            '颜色分组。您可以将颜色分组，以便更轻松地浏览和搜索。',
            '传统色：中国传统色、日本传统色、英国传统色、法国传统色、美国传统色、德国传统色',
            '国际化支持：支持多种语言，包括中文简体、中文繁体、英语、日语、法语、法语。',
        ],
        testimonials: [
            {
                text: 'Dankeschön für ihre schnelle antwort,jetzt ist die deutsche Sprache dabei(德语翻译: 感谢您的快速答复，现在包含德语)',
                author: 'Ivica Črnelić'
            },
        ]
    },
    {
        id: 2,
        name: 'Offline Chess',
        description: '离线的AI棋盘对战游戏',
        image: '/static/chess/logo.png',
        price: 'Free',
        showInfo: false,
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg?height=40&width=40'
        },
        logo: '/static/chess/logo.png',
        previewImages: [
            '/static/chess/preview0.jpg',
            '/static/chess/preview1.jpg',
            '/static/chess/preview2.jpg',
            '/static/chess/preview3.jpg',
            '/static/chess/preview4.jpg',
        ],
        googlePlayUrl: '',
        androidUrl: '',
        // 小程序二维码
        qrCode: '',
        // h5 预览页面
        // previewUrl: 'http://cdn.hhui.top/app/offline-chess/index.html#/',
        features: [
            'AI离线对战棋类游戏。',
            '- 五子棋对战。',
            '- 黑白棋对战。',
            '- 九子棋对战。',
        ],
        testimonials: [
            // {
            //     text: 'RobotFriend has opened up a whole new revenue stream for my digital art. The platform is intuitive and the community is amazing!',
            //     author: 'Alex M., Digital Artist'
            // },
        ]
    },
    {
        id: 3,
        name: '享阅小说 - 精简版',
        description: '看书阅读器-全网小说免费看',
        image: '/static/enjoyreader/cover.png',
        price: 'Free',
        showInfo: false,
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg?height=40&width=40'
        },
        logo: '/static/enjoyreader/logo.png',
        previewImages: [
            '/static/enjoyreader/g0.png',
            '/static/enjoyreader/g1.png',
            '/static/enjoyreader/g2.png',
            '/static/enjoyreader/g3.png',
            '/static/enjoyreader/g4.png',
        ],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.yhh.enjoy.novel.release',
        androidUrl: 'http://cdn.hhui.top/app/owl/owlreader_google_1.8.25031711.apk',
        // 小程序二维码
        qrCode: '',
        // h5 预览页面
        // previewUrl: 'http://cdn.hhui.top/app/offline-chess/index.html#/',
        features: [
            '网络小说阅读追书神器，囊括各大网络平台的精品小说资源。在这里，随时随地自由听书、看书，轻松拥有移动电子书书城，享受阅读的乐趣。全库支持有声模式，满足懒人听书需求。',
            '- 女频精选：《蚀骨蜜宠：前妻浑身是宝》《盛宠之将门嫡长女》《追缉妻宝：夫人很不乖》《金牌法医：娇后世无双》《凰归之帝女凤华》《前妻难追：战少请自重！》……萌宝来袭甜宠无极限，爱如繁星唯美言情，穿越时空废柴逆袭，女生爱不释手；',
            '- 男频红文：《极品医仙》《百炼成神》《绝世剑神》《超品兵王在都市》《都市无敌神医》……龙血战神剑斩八荒，诡域档案尽是人间异事，穿越时空制霸三国，网游世界王者归来；',
            '涵盖小说APP资源！玄幻奇幻、言情小说、武侠小说、都市小说、穿越架空、有声小说、全本小说、耽美小说、同人小说、爱情小说、科幻灵异、经典图书等各类有声小说大全，超质感阅读体验！',
        ],
        testimonials: [
            {
                text: '免费小说无限阅读',
                author: '一灰'
            },
        ]
    },
    {
        id: 4,
        name: '猫头鹰阅读',
        description: '小说漫画阅读器-全网小说免费看',
        image: '/static/owlreader/logo.jpg',
        price: 'Free',
        showInfo: false,
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg?height=40&width=40'
        },
        logo: '/static/owlreader/logo.jpg',
        previewImages: [
            '/static/owlreader/s1.jpg',
            '/static/owlreader/s2.jpg',
            '/static/owlreader/s3.jpg',
            '/static/owlreader/s4.jpg',
            '/static/owlreader/s5.jpg',
            '/static/owlreader/s6.jpg',
            '/static/owlreader/s7.jpg',
            '/static/owlreader/s8.jpg',
            '/static/owlreader/s9.jpg',
        ],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.yhh.enjoy.novel.release',
        androidUrl: 'http://cdn.hhui.top/app/enjoynovel/EnjoyReader_google_1.0.25031711.apk',
        // 小程序二维码
        qrCode: '',
        // h5 预览页面
        // previewUrl: 'http://cdn.hhui.top/app/offline-chess/index.html#/',
        features: [
            '最热最全的免费小说漫画阅读器，全网精品小说漫画，火热新书，追书神器，阅读必备，千万小说漫画爱好者首选阅读器。',
            '火爆新书热书全场免费畅读，爱生活，爱阅读，快乐追更; 一款小说/漫画搜索、免费阅读APP',
            '- 【热门分类】：追书免费小说漫画，汇集都市言情、玄幻奇幻、武侠仙侠、青春校园、穿越架空、惊悚悬疑、耽美同人、游戏竞技、科幻灵异、职场励志等海量热门小说漫画内容，连载小说及时更新，书荒从此说再见！',
            '- 【热门推荐】：高人气推荐栏目，优质书单推荐',
            '- 【实时更新】：实时跨网站搜索全网热门小说，与作者更新云同步',
        ],
        testimonials: [
            {
                text: '用过就知道这个有多好',
                author: '包子'
            },
            {
                text: '不知道为什么评分那么低，但这个APP真的很好用。如果要加广告的话，请记得要把广告放到上面，并且可以调颜色。',
                'author': '陈长歌'
            }
        ]
    },
    {
        id: 5,
        name: '成语消消',
        description: '手指点点点，成语消起来！',
        image: '/static/chengyu/cover.jpg',
        price: 'Free',
        showInfo: false,
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg?height=40&width=40'
        },
        logo: '/static/chengyu/logo.png',
        previewImages: [
            '/static/chengyu/s1.jpeg',
            '/static/chengyu/s2.jpeg',
            '/static/chengyu/s3.jpeg',
            '/static/chengyu/s4.jpeg',
        ],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.yhh.game.chengyuPop',
        androidUrl: '',
        // 小程序二维码
        qrCode: '',
        features: [
            '成语消消闯关，操作简单，接下来就是考验成语积累的时刻!',
            '虽然从牙牙学语时就开始学习成语知识，但到如今仍然有很多耳熟能详的成语被误用，“差强人意”并不差，“目无全牛”技术好，“呆若木鸡”境界高...常见成语的误用你中招了吗？',
            '还不快来成语消消闯关，检验你的成语知识是否及格！界面清新简洁，规则清晰易懂，过程轻松愉悦，让你在快乐中学习到更多成语知识！',
        ],
        testimonials: [
        ]
    },
    {
        id: 6,
        name: 'Printo-普印',
        description: '普染千格，智印万象！',
        image: '/static/printo/cover.jpg',
        price: 'Free',
        showInfo: false,
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg?height=40&width=40'
        },
        logo: '/static/printo/cover.jpg',
        previewImages: [
            '/static/printo/s1.jpg',
            '/static/printo/s2.jpg',
            '/static/printo/s3.jpg',
            '/static/printo/s4.jpg',
        ],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.git.hui.printo',
        androidUrl: '',
        // 小程序二维码
        qrCode: 'data:image/png;base64,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',
        previewUrl: 'https://ai.hhui.top/printo/#/',
        features: [
            '✔️ ​​免费无限创作​​：横线纸、方格纸、点阵纸、音乐五线谱… 想要的纸张类型全都有！',
            '✔️ ​​自由定制​​：调整尺寸、颜色、间距、背景色，打造你的专属模板！',
            '✔️ ​​专业输出​​：一键导出PDF/PNG，完美适配打印，清晰度MAX！',
            '✔️ ​​模板库​​：常用配置自动保存，随取随用，告别重复设置！',
        ],
        testimonials: [
        ]
    },
    {
        id: 7,
        name: 'Time Grids - 时间格子',
        description: `「掌控时间，规划人生——五维时间格子，让每一刻都有迹可循」​​
——用颜色划分过去、现在与未来，以时间格子串联天、周、月、年与生命维度，桌面小部件让时间管理触手可及。`,
        image: '/static/timegrids/logo.jpg',
        price: 'Free',
        showInfo: false,
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg?height=40&width=40'
        },
        logo: '/static/timegrids/logo.jpg',
        previewImages: [
            '/static/timegrids/s0.jpg',
            '/static/timegrids/s1.jpg',
            '/static/timegrids/s2.jpg',
            '/static/timegrids/s3.jpg',
            '/static/timegrids/s4.jpg',
            '/static/timegrids/s5.jpg',
            '/static/timegrids/s6.jpg',
        ],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.github.hui.lifegrids',
        androidUrl: '',
        // 小程序二维码
        qrCode: '',
        // h5 预览页面
        // previewUrl: 'http://cdn.hhui.top/app/offline-chess/index.html#/',
        features: [
            '1. 五维时间视角，覆盖全生命周期​​',
            '2. 三色时间格子，感知时间流动​​',
            '​​3. 桌面小部件，时间管理零门槛​​',
            '4. 适用场景',
            '- 学生党​​：用「周视图」规划课程与复习，用「生命」维度平衡学业与兴趣。',
            '- 职场人​​：在「年视图」中拆解OKR目标，用「现在」格子聚焦番茄钟工作流。',
            '- 自由职业者​​：通过「生命倒计时」优化时间投资，用小部件随时更新进度。',
        ],
        testimonials: [
        ]
    },
    {
        id: 8,
        name: 'Text Widget - 文本小部件',
        description: `极简桌面文字小部件，打造你的个性化桌面！​​`,
        image: '/static/textwidget/logo.webp',
        price: 'Free',
        showInfo: false,
        creator: {
            name: '一灰灰',
            handle: '@almahealth',
            avatar: 'https://hhui.top/tutorial/logo.svg?height=40&width=40'
        },
        logo: '/static/textwidget/logo.webp',
        previewImages: [
            '/static/textwidget/s0.webp',
            '/static/textwidget/s1.webp',
            '/static/textwidget/s2.webp',
            '/static/textwidget/s3.webp',
            '/static/textwidget/s4.webp',
            '/static/textwidget/s4.webp',
        ],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.github.hui.textwidget',
        androidUrl: '',
        // 小程序二维码
        qrCode: '',
        // h5 预览页面
        // previewUrl: 'http://cdn.hhui.top/app/offline-chess/index.html#/',
        features: [
            '🚀 ​​极简文字小部件​​ – 个性化文字、倒计时、正计时，打造专属桌面！​​',
            '🎨 ​​随心搭配​​ – 自定义字体、颜色、背景，桌面颜值UP！',
            '​​⏳ ​​倒计时/正计时​​ – 重要时刻不再错过，专注效率更轻松！',
            '🌈 适用场景',
            '- 📅 ​​生活提醒​​：倒计时生日、纪念日、考试、假期…让期待更有仪式感！',
            '- 📚 ​​学习规划​​：正计时复习、阅读、备考，帮助专注高效学习！',
            '- 🎯 ​​工作激励​​：打卡任务、专注模式，提升工作效率！',
        ],
        testimonials: [
        ]
    },
    {
        id: 999,
        name: 'more',
        description: '更多AI生成app正在加载中...',
        image: '/static/placeholder.svg?height=400&width=300',
        logo: '/static/placeholder.svg?height=400&width=300',
        price: 'Free',
        showInfo: false,
        creator: {
            name: 'hero',
            handle: '@cryptolabs',
            avatar: '/static/placeholder.svg?height=40&width=40'
        }
    }
];