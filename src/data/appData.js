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
            '国际化支持：支持多种语言，包括中文简体、中文繁体、英语、日语、法语。',
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