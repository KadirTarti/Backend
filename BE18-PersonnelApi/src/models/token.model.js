'use strict'

/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personnel', // hangi bilgiyle ilişki kurmak istiyorsak onu yazıyoruz
        required: true,
        index: true, // bu veri daha çok kullanılacak bilgisini veriyoruz böylece. arkada saklıyor. işlemleri daha hızlı gerçekleştiriyor
        unique: true, //? bunu yazmamızın nedeni bizim uygulamammızda tek bir userId tek token'e sahip olacağı için... örn netflix, zoom vs'de aynı userId'ye birden fazla token atanabiliyor. Benim kurgumda tek userId ve tokenle birden fazla cihazda oturum açılabilir. ama birinden çıkış yapıldığında hepsinden otomatik yapılmış olacak.
    },
    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true,
    }
},{
    timestamps: true, //? bu bize otomatik olarak created_at ve updated_at alanları
    collection: 'tokens',
})

module.exports = mongoose.model("Token", TokenSchema);