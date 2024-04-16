require('./config')
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    getAggregateVotesInPollMessage,
    proto,
  } = require('@whiskeysockets/baileys'),
  fs = require('fs'),
  pino = require('pino'),
  chalk = require('chalk'),
  path = require('path'),
  readline = require('readline'),
  axios = require('axios'),
  FileType = require('file-type'),
  yargs = require('yargs/yargs'),
  _ = require('lodash'),
  { Boom } = require('@hapi/boom'),
  moment = require('moment-timezone'),
  PhoneNumber = require('awesome-phonenumber'),
  figlet = require('figlet'),
  usePairingCode = true,
  {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
  } = require('./lib/exif'),
  {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep,
  } = require('./lib/myfunc'),
  question = (_0x3f801c) => {
    const _0x2f466b = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    return new Promise((_0x1fde69) => {
      _0x2f466b.question(_0x3f801c, _0x1fde69)
    })
  }
var low
try {
  low = require('lowdb')
} catch (_0x3d6dad) {
  low = require('./lib/lowdb')
}
const { Low, JSONFile } = low,
  mongoDB = require('./lib/mongoDB'),
  store = makeInMemoryStore({
    logger: pino().child({
      level: 'silent',
      stream: 'store',
    }),
  }),
  color = (_0x5691f7, _0x217197) => {
    return !_0x217197
      ? chalk.green(_0x5691f7)
      : chalk.keyword(_0x217197)(_0x5691f7)
  }
global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
)
global.db = new Low(
  /https?:\/\//.test(opts.db || '')
    ? new cloudDBAdapter(opts.db)
    : /mongodb/.test(opts.db)
    ? new mongoDB(opts.db)
    : new JSONFile('src/database.json')
)
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise((_0x3f6866) =>
      setInterval(function () {
        !global.db.READ
          ? (clearInterval(this),
            _0x3f6866(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null
      }, 1000)
    )
  }
  if (global.db.data !== null) {
    return
  }
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    game: {},
    database: {},
    settings: {},
    setting: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
if (global.db) {
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()
    }
  }, 30000)
}
console.log(
  color(
    figlet.textSync('CYBER', {
      font: 'Standard',
      horizontalLayout: 'default',
      vertivalLayout: 'default',
      width: 50,
      whitespaceBreak: false,
    }),
    'blue'
  )
)
async function connectToWhatsApp() {
  const { state: _0x5a05e3, saveCreds: _0x3b3133 } =
      await useMultiFileAuthState(global.sessionName),
    _0x4aefb8 = makeWASocket({
      logger: pino({ level: 'silent' }),
      printQRInTerminal: !usePairingCode,
      auth: _0x5a05e3,
      browser: ['Ubuntu', 'Chrome', ''],
    })
  if (usePairingCode && !_0x4aefb8.authState.creds.registered) {
    const _0x51bc3b = await question(
        'Masukan Nomor Yang Diawali Dengan 62 :\n'
      ),
      _0x1d3b54 = await _0x4aefb8.requestPairingCode(_0x51bc3b.trim())
    console.log('Pairing Code: ' + _0x1d3b54)
  }
  return (
    (_0x4aefb8.decodeJid = (_0x540861) => {
      if (!_0x540861) {
        return _0x540861
      }
      if (/:\d+@/gi.test(_0x540861)) {
        let _0x248086 = jidDecode(_0x540861) || {}
        return (
          (_0x248086.user &&
            _0x248086.server &&
            _0x248086.user + '@' + _0x248086.server) ||
          _0x540861
        )
      } else {
        return _0x540861
      }
    }),
    _0x4aefb8.ev.on('messages.upsert', async (_0x1290ab) => {
      try {
        mek = _0x1290ab.messages[0]
        if (!mek.message) {
          return
        }
        mek.message =
          Object.keys(mek.message)[0] === 'ephemeralMessage'
            ? mek.message.ephemeralMessage.message
            : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') {
          return
        }
        if (
          !_0x4aefb8.public &&
          !mek.key.fromMe &&
          _0x1290ab.type === 'notify'
        ) {
          return
        }
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
          return
        }
        m = smsg(_0x4aefb8, mek, store)
        require('./yudamods')(_0x4aefb8, m, _0x1290ab, store)
      } catch (_0x16ab6b) {
        console.log(_0x16ab6b)
      }
    }),
    _0x4aefb8.ev.on('call', async (_0x1b4cd8) => {
      let _0x325b0e = await _0x4aefb8.decodeJid(_0x4aefb8.user.id),
        _0x508be5 = global.anticall
      if (!_0x508be5) {
        return
      }
      console.log(_0x1b4cd8)
      for (let _0x1d2f6e of _0x1b4cd8) {
        if (_0x1d2f6e.isGroup == false) {
          if (_0x1d2f6e.status == 'offer') {
            let _0x510f35 = await _0x4aefb8.sendTextWithMentions(
              _0x1d2f6e.from,
              '*' +
                _0x4aefb8.user.name +
                '* Tidak Menerima Panggilan ' +
                (_0x1d2f6e.isVideo ? 'video' : 'suara') +
                '. Maaf @' +
                _0x1d2f6e.from.split('@')[0] +
                ' Kamu Diblokir. Silahkan Hubungi Owner !'
            )
            _0x4aefb8.sendContact(
              _0x1d2f6e.from,
              owner.map((_0x2a6af0) => _0x2a6af0.split('@')[0]),
              _0x510f35
            )
            await sleep(8000)
            await _0x4aefb8.updateBlockStatus(_0x1d2f6e.from, 'block')
          }
        }
      }
    }),
    _0x4aefb8.ev.on('group-participants.update', async (_0x1ca9b9) => {
      try {
        let _0x3b7985 = await _0x4aefb8.groupMetadata(_0x1ca9b9.id),
          _0x110cac = _0x1ca9b9.participants
        for (let _0x4c782a of _0x110cac) {
          try {
            ppuser = await _0x4aefb8.profilePictureUrl(_0x4c782a, 'image')
          } catch {
            ppuser =
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
          }
          try {
            ppgroup = await _0x4aefb8.profilePictureUrl(_0x1ca9b9.id, 'image')
          } catch {
            ppgroup =
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
          }
          if (_0x1ca9b9.action == 'add') {
            let _0x11a1da =
              'Selamat datang di grup ' +
              _0x3b7985.subject +
              ', semoga betah di grup ini yaa ' +
              _0x4c782a.split('@')[0]
            _0x4aefb8.sendMessage(_0x1ca9b9.id, {
              text: _0x11a1da,
              contextInfo: {
                externalAdReply: {
                  title: '\uD83D\uDCAC Halo Selamat Datang',
                  body: '' + ownername,
                  thumbnailUrl: ppuser,
                  sourceUrl: 'https://instagram.com/yudamods',
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            })
            await sleep(100)
            _0x4aefb8.sendMessage(_0x1ca9b9.id, {
              audio: fs.readFileSync('./mp3/welcome.mp3'),
              mimetype: 'audio/mp4',
              ptt: true,
              fileLength: 88738,
            })
          } else {
            if (_0x1ca9b9.action == 'yudamods2443417') {
              let _0x2e459a =
                '\uD83D\uDC4B*Selamat Tinggal* ' +
                _0x4c782a.split('@')[0] +
                ' terimakasih telah singgah meski tak sungguh..\n\n*Quote:*\n_Jangan malu terlihat miskin, tapi malu lah di saat orang lain qunut dan kau malah sujud.._\n*AP*'
              _0x4aefb8.sendMessage(_0x1ca9b9.id, {
                text: _0x2e459a,
                contextInfo: {
                  externalAdReply: {
                    title: '\uD83D\uDCAC Selamat Tinggal',
                    body: '' + ownername,
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://instagram.com/yudamods',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              })
              await sleep(100)
              _0x4aefb8.sendMessage(_0x1ca9b9.id, {
                audio: fs.readFileSync('./mp3/sayonara.mp3'),
                mimetype: 'audio/mp4',
                ptt: true,
                fileLength: 88738,
              })
            } else {
              if (_0x1ca9b9.action == 'promote') {
                _0x4aefb8.sendMessage(_0x1ca9b9.id, {
                  image: { url: ppuser },
                  mentions: [_0x4c782a],
                  caption:
                    '@' +
                    _0x4c782a.split('@')[0] +
                    ' Ciee Jadi Admin Group ' +
                    _0x3b7985.subject,
                })
              } else {
                _0x1ca9b9.action == 'demote' &&
                  _0x4aefb8.sendMessage(_0x1ca9b9.id, {
                    image: { url: ppuser },
                    mentions: [_0x4c782a],
                    caption:
                      '@' +
                      _0x4c782a.split('@')[0] +
                      ' Wkwk Di Hapus Jadi Admin Group ' +
                      _0x3b7985.subject,
                  })
              }
            }
          }
        }
      } catch (_0x4ad815) {
        console.log(_0x4ad815)
      }
    }),
    _0x4aefb8.ev.on('contacts.update', (_0x477312) => {
      for (let _0x3d2d82 of _0x477312) {
        let _0x4cea40 = _0x4aefb8.decodeJid(_0x3d2d82.id)
        if (store && store.contacts) {
          store.contacts[_0x4cea40] = {
            id: _0x4cea40,
            name: _0x3d2d82.notify,
          }
        }
      }
    }),
    (_0x4aefb8.getName = (_0x16f1a0, _0x50c614 = false) => {
      id = _0x4aefb8.decodeJid(_0x16f1a0)
      _0x50c614 = _0x4aefb8.withoutContact || _0x50c614
      let _0xcb46a9
      if (id.endsWith('@g.us')) {
        return new Promise(async (_0x4e8ddf) => {
          _0xcb46a9 = store.contacts[id] || {}
          if (!(_0xcb46a9.name || _0xcb46a9.subject)) {
            _0xcb46a9 = _0x4aefb8.groupMetadata(id) || {}
          }
          _0x4e8ddf(
            _0xcb46a9.name ||
              _0xcb46a9.subject ||
              PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber(
                'international'
              )
          )
        })
      } else {
        _0xcb46a9 =
          id === '0@s.whatsapp.net'
            ? {
                id: id,
                name: 'WhatsApp',
              }
            : id === _0x4aefb8.decodeJid(_0x4aefb8.user.id)
            ? _0x4aefb8.user
            : store.contacts[id] || {}
      }
      return (
        (_0x50c614 ? '' : _0xcb46a9.name) ||
        _0xcb46a9.subject ||
        _0xcb46a9.verifiedName ||
        PhoneNumber('+' + _0x16f1a0.replace('@s.whatsapp.net', '')).getNumber(
          'international'
        )
      )
    }),
    (_0x4aefb8.sendContact = async (
      _0xf0d8a1,
      _0x1391ea,
      _0x3bad9b = '',
      _0x247724 = {}
    ) => {
      let _0x3e8deb = []
      for (let _0x5c4666 of _0x1391ea) {
        _0x3e8deb.push({
          displayName: await _0x4aefb8.getName(_0x5c4666 + '@s.whatsapp.net'),
          vcard:
            'BEGIN:VCARD\nVERSION:3.0\nN:' +
            (await _0x4aefb8.getName(_0x5c4666 + '@s.whatsapp.net')) +
            '\nFN:' +
            (await _0x4aefb8.getName(_0x5c4666 + '@s.whatsapp.net')) +
            '\nitem1.TEL;waid=' +
            _0x5c4666 +
            ':' +
            _0x5c4666 +
            '\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:yudamodsvip@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/JsXKjrkkd9NIXEb5cMKHWz\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD',
        })
      }
      _0x4aefb8.sendMessage(
        _0xf0d8a1,
        {
          contacts: {
            displayName: _0x3e8deb.length + ' Kontak',
            contacts: _0x3e8deb,
          },
          ..._0x247724,
        },
        { quoted: _0x3bad9b }
      )
    }),
    (_0x4aefb8.public = true),
    _0x4aefb8.ev.on('creds.update', _0x3b3133),
    (_0x4aefb8.downloadMediaMessage = async (_0xa846da) => {
      let _0x4ff1b6 = (_0xa846da.msg || _0xa846da).mimetype || '',
        _0x381ce4 = _0xa846da.mtype
          ? _0xa846da.mtype.replace(/Message/gi, '')
          : _0x4ff1b6.split('/')[0]
      const _0x7c290f = await downloadContentFromMessage(_0xa846da, _0x381ce4)
      let _0x56cdf7 = Buffer.from([])
      for await (const _0xff1edf of _0x7c290f) {
        _0x56cdf7 = Buffer.concat([_0x56cdf7, _0xff1edf])
      }
      return _0x56cdf7
    }),
    (_0x4aefb8.sendImage = async (
      _0xb883be,
      _0x2c8d23,
      _0x77f9d0 = '',
      _0x352731 = '',
      _0x13b11b
    ) => {
      let _0x5a70af = Buffer.isBuffer(_0x2c8d23)
        ? _0x2c8d23
        : /^data:.*?\/.*?;base64,/i.test(_0x2c8d23)
        ? Buffer.from(_0x2c8d23.split`,`[1], 'base64')
        : /^https?:\/\//.test(_0x2c8d23)
        ? await await getBuffer(_0x2c8d23)
        : fs.existsSync(_0x2c8d23)
        ? fs.readFileSync(_0x2c8d23)
        : Buffer.alloc(0)
      return await _0x4aefb8.sendMessage(
        _0xb883be,
        {
          image: _0x5a70af,
          caption: _0x77f9d0,
          ..._0x13b11b,
        },
        { quoted: _0x352731 }
      )
    }),
    (_0x4aefb8.sendText = (_0x2a550c, _0x1e84c5, _0x3c0129 = '', _0x5e3d79) =>
      _0x4aefb8.sendMessage(
        _0x2a550c,
        {
          text: _0x1e84c5,
          ..._0x5e3d79,
        },
        { quoted: _0x3c0129 }
      )),
    (_0x4aefb8.sendTextWithMentions = async (
      _0x20c66e,
      _0x1556fc,
      _0x4358d5,
      _0x7dfe70 = {}
    ) =>
      _0x4aefb8.sendMessage(
        _0x20c66e,
        {
          text: _0x1556fc,
          contextInfo: {
            mentionedJid: [..._0x1556fc.matchAll(/@(\d{0,16})/g)].map(
              (_0x24e813) => _0x24e813[1] + '@s.whatsapp.net'
            ),
          },
          ..._0x7dfe70,
        },
        { quoted: _0x4358d5 }
      )),
    (_0x4aefb8.sendImageAsSticker = async (
      _0x3ab582,
      _0x442496,
      _0x564d44,
      _0x54729a = {}
    ) => {
      let _0x23399c = Buffer.isBuffer(_0x442496)
          ? _0x442496
          : /^data:.*?\/.*?;base64,/i.test(_0x442496)
          ? Buffer.from(_0x442496.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x442496)
          ? await await getBuffer(_0x442496)
          : fs.existsSync(_0x442496)
          ? fs.readFileSync(_0x442496)
          : Buffer.alloc(0),
        _0x3a8980
      return (
        _0x54729a && (_0x54729a.packname || _0x54729a.author)
          ? (_0x3a8980 = await writeExifImg(_0x23399c, _0x54729a))
          : (_0x3a8980 = await imageToWebp(_0x23399c)),
        await _0x4aefb8.sendMessage(
          _0x3ab582,
          {
            sticker: { url: _0x3a8980 },
            ..._0x54729a,
          },
          { quoted: _0x564d44 }
        ),
        _0x3a8980
      )
    }),
    (_0x4aefb8.sendVideoAsSticker = async (
      _0x37fd5e,
      _0x5233e4,
      _0x44987c,
      _0xc59d4b = {}
    ) => {
      let _0x2fe857 = Buffer.isBuffer(_0x5233e4)
          ? _0x5233e4
          : /^data:.*?\/.*?;base64,/i.test(_0x5233e4)
          ? Buffer.from(_0x5233e4.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x5233e4)
          ? await await getBuffer(_0x5233e4)
          : fs.existsSync(_0x5233e4)
          ? fs.readFileSync(_0x5233e4)
          : Buffer.alloc(0),
        _0x14c8ee
      return (
        _0xc59d4b && (_0xc59d4b.packname || _0xc59d4b.author)
          ? (_0x14c8ee = await writeExifVid(_0x2fe857, _0xc59d4b))
          : (_0x14c8ee = await videoToWebp(_0x2fe857)),
        await _0x4aefb8.sendMessage(
          _0x37fd5e,
          {
            sticker: { url: _0x14c8ee },
            ..._0xc59d4b,
          },
          { quoted: _0x44987c }
        ),
        _0x14c8ee
      )
    }),
    (_0x4aefb8.downloadAndSaveMediaMessage = async (
      _0x3d8b26,
      _0x4f1ab4,
      _0x407f70 = true
    ) => {
      let _0x2bf072 = _0x3d8b26.msg ? _0x3d8b26.msg : _0x3d8b26,
        _0x2cb50f = (_0x3d8b26.msg || _0x3d8b26).mimetype || '',
        _0xa4519f = _0x3d8b26.mtype
          ? _0x3d8b26.mtype.replace(/Message/gi, '')
          : _0x2cb50f.split('/')[0]
      const _0x3ccc0a = await downloadContentFromMessage(_0x2bf072, _0xa4519f)
      let _0xfa1157 = Buffer.from([])
      for await (const _0x3c90a5 of _0x3ccc0a) {
        _0xfa1157 = Buffer.concat([_0xfa1157, _0x3c90a5])
      }
      let _0x6d6fc6 = await FileType.fromBuffer(_0xfa1157)
      return (
        (trueFileName = _0x407f70
          ? _0x4f1ab4 + '.' + _0x6d6fc6.ext
          : _0x4f1ab4),
        await fs.writeFileSync(trueFileName, _0xfa1157),
        trueFileName
      )
    }),
    (_0x4aefb8.cMod = (
      _0x5b1542,
      _0x1eb081,
      _0x1a2f52 = '',
      _0x1fd8d4 = _0x4aefb8.user.id,
      _0xb5856b = {}
    ) => {
      let _0x104ac = Object.keys(_0x1eb081.message)[0],
        _0x178505 = _0x104ac === 'ephemeralMessage'
      _0x178505 &&
        (_0x104ac = Object.keys(_0x1eb081.message.ephemeralMessage.message)[0])
      let _0x2c5bb0 = _0x178505
          ? _0x1eb081.message.ephemeralMessage.message
          : _0x1eb081.message,
        _0x41996e = _0x2c5bb0[_0x104ac]
      if (typeof _0x41996e === 'string') {
        _0x2c5bb0[_0x104ac] = _0x1a2f52 || _0x41996e
      } else {
        if (_0x41996e.caption) {
          _0x41996e.caption = _0x1a2f52 || _0x41996e.caption
        } else {
          if (_0x41996e.text) {
            _0x41996e.text = _0x1a2f52 || _0x41996e.text
          }
        }
      }
      if (typeof _0x41996e !== 'string') {
        _0x2c5bb0[_0x104ac] = {
          ..._0x41996e,
          ..._0xb5856b,
        }
      }
      if (_0x1eb081.key.participant) {
        _0x1fd8d4 = _0x1eb081.key.participant =
          _0x1fd8d4 || _0x1eb081.key.participant
      } else {
        if (_0x1eb081.key.participant) {
          _0x1fd8d4 = _0x1eb081.key.participant =
            _0x1fd8d4 || _0x1eb081.key.participant
        }
      }
      if (_0x1eb081.key.remoteJid.includes('@s.whatsapp.net')) {
        _0x1fd8d4 = _0x1fd8d4 || _0x1eb081.key.remoteJid
      } else {
        if (_0x1eb081.key.remoteJid.includes('@broadcast')) {
          _0x1fd8d4 = _0x1fd8d4 || _0x1eb081.key.remoteJid
        }
      }
      return (
        (_0x1eb081.key.remoteJid = _0x5b1542),
        (_0x1eb081.key.fromMe = _0x1fd8d4 === _0x4aefb8.user.id),
        proto.WebMessageInfo.fromObject(_0x1eb081)
      )
    }),
    (_0x4aefb8.sendFile = async (
      _0x4c3de6,
      _0x39a066,
      _0x5ba5e9,
      _0x27b386 = {},
      _0x4b650f = {}
    ) => {
      let _0x5dbb2b = await _0x4aefb8.getFile(_0x39a066, true),
        {
          filename: _0x19ea8d,
          size: _0x5a75cd,
          ext: _0xdc5510,
          mime: _0x5c337f,
          data: _0x3a6dce,
        } = _0x5dbb2b,
        _0x3ec43b = '',
        _0x4f66f2 = _0x5c337f,
        _0x5cff84 = _0x19ea8d
      if (_0x4b650f.asDocument) {
        _0x3ec43b = 'document'
      }
      if (_0x4b650f.asSticker || /webp/.test(_0x5c337f)) {
        let { writeExif: _0x37e726 } = require('./lib/sticker.js'),
          _0x974b3a = {
            mimetype: _0x5c337f,
            data: _0x3a6dce,
          }
        _0x5cff84 = await _0x37e726(_0x974b3a, {
          packname: global.packname,
          author: global.packname2,
          categories: _0x4b650f.categories ? _0x4b650f.categories : [],
        })
        await fs.promises.unlink(_0x19ea8d)
        _0x3ec43b = 'sticker'
        _0x4f66f2 = 'image/webp'
      } else {
        if (/image/.test(_0x5c337f)) {
          _0x3ec43b = 'image'
        } else {
          if (/video/.test(_0x5c337f)) {
            _0x3ec43b = 'video'
          } else {
            if (/audio/.test(_0x5c337f)) {
              _0x3ec43b = 'audio'
            } else {
              _0x3ec43b = 'document'
            }
          }
        }
      }
      return (
        await _0x4aefb8.sendMessage(
          _0x4c3de6,
          {
            [_0x3ec43b]: { url: _0x5cff84 },
            mimetype: _0x4f66f2,
            fileName: _0x5ba5e9,
            ..._0x4b650f,
          },
          {
            quoted: _0x27b386,
            ..._0x4b650f,
          }
        ),
        fs.promises.unlink(_0x5cff84)
      )
    }),
    (_0x4aefb8.parseMention = async (_0x407c1b) => {
      return [..._0x407c1b.matchAll(/@([0-9]{5,16}|0)/g)].map(
        (_0x5b40a8) => _0x5b40a8[1] + '@s.whatsapp.net'
      )
    }),
    (_0x4aefb8.copyNForward = async (
      _0x463113,
      _0x35a3fb,
      _0x504934 = false,
      _0x38a170 = {}
    ) => {
      let _0x290f84
      _0x38a170.readViewOnce &&
        ((_0x35a3fb.message =
          _0x35a3fb.message &&
          _0x35a3fb.message.ephemeralMessage &&
          _0x35a3fb.message.ephemeralMessage.message
            ? _0x35a3fb.message.ephemeralMessage.message
            : _0x35a3fb.message || undefined),
        (_0x290f84 = Object.keys(_0x35a3fb.message.viewOnceMessage.message)[0]),
        delete (_0x35a3fb.message && _0x35a3fb.message.ignore
          ? _0x35a3fb.message.ignore
          : _0x35a3fb.message || undefined),
        delete _0x35a3fb.message.viewOnceMessage.message[_0x290f84].viewOnce,
        (_0x35a3fb.message = { ..._0x35a3fb.message.viewOnceMessage.message }))
      let _0x82c96e = Object.keys(_0x35a3fb.message)[0],
        _0x59152e = await generateForwardMessageContent(_0x35a3fb, _0x504934),
        _0x39a7f4 = Object.keys(_0x59152e)[0],
        _0x168a4d = {}
      if (_0x82c96e != 'conversation') {
        _0x168a4d = _0x35a3fb.message[_0x82c96e].contextInfo
      }
      _0x59152e[_0x39a7f4].contextInfo = {
        ..._0x168a4d,
        ..._0x59152e[_0x39a7f4].contextInfo,
      }
      const _0x4ced12 = await generateWAMessageFromContent(
        _0x463113,
        _0x59152e,
        _0x38a170
          ? {
              ..._0x59152e[_0x39a7f4],
              ..._0x38a170,
              ...(_0x38a170.contextInfo
                ? {
                    contextInfo: {
                      ..._0x59152e[_0x39a7f4].contextInfo,
                      ..._0x38a170.contextInfo,
                    },
                  }
                : {}),
            }
          : {}
      )
      return (
        await _0x4aefb8.relayMessage(_0x463113, _0x4ced12.message, {
          messageId: _0x4ced12.key.id,
        }),
        _0x4ced12
      )
    }),
    (_0x4aefb8.getFile = async (_0x2c308a, _0x511d64) => {
      let _0x619369,
        _0x12f122 = Buffer.isBuffer(_0x2c308a)
          ? _0x2c308a
          : /^data:.*?\/.*?;base64,/i.test(_0x2c308a)
          ? Buffer.from(_0x2c308a.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x2c308a)
          ? await (_0x619369 = await getBuffer(_0x2c308a))
          : fs.existsSync(_0x2c308a)
          ? ((filename = _0x2c308a), fs.readFileSync(_0x2c308a))
          : typeof _0x2c308a === 'string'
          ? _0x2c308a
          : Buffer.alloc(0),
        _0x4b8d1c = (await FileType.fromBuffer(_0x12f122)) || {
          mime: 'application/octet-stream',
          ext: '.bin',
        }
      filename = path.join(
        __filename,
        '../src/' + new Date() * 1 + '.' + _0x4b8d1c.ext
      )
      if (_0x12f122 && _0x511d64) {
        fs.promises.writeFile(filename, _0x12f122)
      }
      return {
        res: _0x619369,
        filename: filename,
        size: await getSizeMedia(_0x12f122),
        ..._0x4b8d1c,
        data: _0x12f122,
      }
    }),
    (_0x4aefb8.serializeM = (_0x383905) => smsg(_0x4aefb8, _0x383905, store)),
    _0x4aefb8.ev.on('connection.update', async (_0x267789) => {
      const { connection: _0xa2ff5e, lastDisconnect: _0x7d4f94 } = _0x267789
      if (_0xa2ff5e === 'close') {
        let _0x4c4ebe = new Boom(_0x7d4f94?.error)?.output.statusCode
        if (_0x4c4ebe === DisconnectReason.badSession) {
          console.log('Bad Session File, Please Delete Session and Scan Again')
          process.exit()
        } else {
          if (_0x4c4ebe === DisconnectReason.connectionClosed) {
            console.log('Connection closed, reconnecting....')
            connectToWhatsApp()
          } else {
            if (_0x4c4ebe === DisconnectReason.connectionLost) {
              console.log('Connection Lost from Server, reconnecting...')
              connectToWhatsApp()
            } else {
              if (_0x4c4ebe === DisconnectReason.connectionReplaced) {
                console.log(
                  'Connection Replaced, Another New Session Opened, Please Restart Bot'
                )
                process.exit()
              } else {
                if (_0x4c4ebe === DisconnectReason.loggedOut) {
                  console.log(
                    'Device Logged Out, Please Delete Folder Session yusril and Scan Again.'
                  )
                  process.exit()
                } else {
                  if (_0x4c4ebe === DisconnectReason.restartRequired) {
                    console.log('Restart Required, Restarting...')
                    connectToWhatsApp()
                  } else {
                    _0x4c4ebe === DisconnectReason.timedOut
                      ? (console.log('Connection TimedOut, Reconnecting...'),
                        connectToWhatsApp())
                      : (console.log(
                          'Unknown DisconnectReason: ' +
                            _0x4c4ebe +
                            '|' +
                            _0xa2ff5e
                        ),
                        connectToWhatsApp())
                  }
                }
              }
            }
          }
        }
      } else {
        _0xa2ff5e === 'open' &&
          _0x4aefb8.sendMessage('6283153305709@s.whatsapp.net', {
            text: '\u26A1 *UPDATE NEW*\n\n_ANDA TELAH BERHASIL TERHUBUNG OLEH BOT BANG YUDAMODS, SUPPORT YT BANG YUDAMODS YAA_\n\n\uD83C\uDF81 JOIN TELE : t.me/YUDAMODS',
          })
      }
    }),
    _0x4aefb8
  )
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
