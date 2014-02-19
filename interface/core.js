fdom.apis.set("core", {
  'createChannel': {type: "method", value: []},
  'bindChannel': {type: "method", value: ["proxy"]},
  'getId': {type: "method", value: []}
});

fdom.apis.set("core.view", {
  'open': {type: "method", value: ["string", {
    'file':"string",
    'code':"string"
  }]},
  'show': {type: "method", value: []},
  'close': {type: "method", value: []},
  'postMessage': {type: "method", value: ["object"]},

  'message': {type: "event", value: "object"},
  'onClose': {type: "event", value: []}
});

fdom.apis.set("core.storage", {
  'keys': {type: "method", value: []},
  'get': {type: "method", value: ["string"]},
  'set': {type: "method", value: ["string", "string"]},
  'remove': {type: "method", value: ["string"]},
  'clear': {type: "method", value: []}
});

fdom.apis.set("core.socket", {
  'create': {type: "method", value: ["string", "object"]},
  'connect': {type: "method", value: ["number", "string", "number"]},
  'onData': {type: "event", value: {"socketId": "number", "data": "buffer"}},
  'write': {type: "method", value: ["number", "buffer"]},
  'disconnect': {type: "method", value: ["number"]},
  'destroy': {type: "method", value: ["number"]},
  'listen': {type: "method", value: ["number", "string", "number"]},
  'onConnection': {type: "event", value: {
    'serverSocketId': "number",
    'clientSocketId': "number"}},
  'onDisconnect': {type: "event", value: {
    "socketId": "number", "error": "string"}},
  'getInfo': {type: "method", value: ["number"]}
});

fdom.apis.set("core.runtime", {
  'createApp': {type: "method", value: ["string", "proxy"]},
  'resolve': {type: "method", value: ["string", "string"]},
  'needFile': {type: 'event', value: ["string", "string"]}
});

fdom.apis.set('core.echo', {
  'setup': {type: "method", value: ["proxy"]},
  'send': {type: "method", value: ["string"]},
  'message': {type: "event", value: "string"}
});


fdom.apis.set('core.peerconnection', {
  // Setup the link to the peer and options for this peer connection.
  'setup': {type: "method",
    value: [
      // The 'proxy' object is a freedom channel identifier used to send/receive
      // text messages to/from a signalling chanel.
      "proxy",
      // The peerName, used debugging and console messages.
      "string",
      // The list of STUN servers to use.
      // The format of a single entry is stun:HOST:PORT, where HOST
      // and PORT are a stun server hostname and port, respectively.
      ["array", "string"]
      ]
  },

  // Send a message to the peer.
  'send': {type: "method", value: [{
    // Data channel id. If provided, will be used as the channel label.
    // The behavior is undefined if the channel label doesn't exist.
    "channelLabel": "string",
    // One of the bellow should be defined; this is the data to send.
    "text": "string",
    "binary": "blob",
    "buffer": "buffer"
  }]},

  // Called when we get a message from the peer.
  'onReceived': {type: "event", value: {
    // The label/id of the data channel.
    "channelLabel": "string",
    // One the below will be specified.
    "text": "string",
    "binary": "blob",
    "buffer": "buffer"
  }},

  // Open the data channel with this label.
  'openDataChannel': {type: "method", value: ["string"]},
  // Close the data channel with this label.
  'closeDataChannel': {type: "method", value: ["string"]},

  // A channel with this id has been opened.
  'onOpenDataChannel': {type: "event", value: {"channelId": "string"}},
  // The channale with this id has been closed.
  'onCloseDataChannel': {type: "event", value: {"channelId": "string"}},

  // Returns the number of bytes that have queued using "send", but not
  // yet sent out. Currently just exposes:
  // http://www.w3.org/TR/webrtc/#widl-RTCDataChannel-bufferedAmount
  "getBufferedAmount": {type: "method", value: ["string"]},

  // Close the peer connection.
  'close': {type: "method", value: []},
  // The peer connection has been closed.
  'onClose': {type: "event", value: {}},
});

