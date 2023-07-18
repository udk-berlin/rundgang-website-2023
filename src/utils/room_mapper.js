export function mapRoom(room) {
  if (room.name.startsWith('R-') || room.name.startsWith('RE-') || room.name.startsWith('R ') || room.name.startsWith('RE ')) {
    return {id: room.id, formattedMessageId: 'room', name: room.name.replace('RE-', '').replace('R-', '').replace('RE ', '').replace('R ', '')}
  } else if (room.name.startsWith('V-') || room.name.startsWith('VF-') || room.name.startsWith('V ') || room.name.startsWith('VF ')) {
    return {id: room.id, formattedMessageId: 'corridor', name: room.name.replace('VF-', '').replace('V-', '').replace('VF ', '').replace('V ', '')}
  } else if (room.name.startsWith('TH-') || room.name.startsWith('TPH-') || room.name.startsWith('TH ') || room.name.startsWith('TPH ')) {
    return {id: room.id, formattedMessageId: 'stairs', name: room.name.replace('TH-', '').replace('TPH-', '').replace('TH ', '').replace('TPH ', '')}
  } else if (room.name.startsWith('TF-') || room.name.startsWith('TF ')) {
    return {id: room.id, formattedMessageId: 'technic', name: room.name.replace('TF-', '').replace('TF ', '')}
  } else if (room.name === 'Außenvitrine') {
    return {id: room.id, formattedMessageId: null, name: room.name}
  } else {
    return {id: room.id, formattedMessageId: 'room', name: room.name}
  }
}