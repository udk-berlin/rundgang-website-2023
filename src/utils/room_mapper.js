export function mappeRoom(name) {
  if (name.startsWith('R-') || name.startsWith('RE-') || name.startsWith('R ') || name.startsWith('RE ')) {
    return {id: 'room', name: name.replace('RE-', '').replace('R-', '').replace('RE ', '').replace('R ', '')}
  } else if (name.startsWith('V-') || name.startsWith('VF-') || name.startsWith('V ') || name.startsWith('VF ')) {
    return {id: 'corridor', name: name.replace('VF-', '').replace('V-', '').replace('VF ', '').replace('V ', '')}
  } else if (name.startsWith('TH-') || name.startsWith('TPH-') || name.startsWith('TH ') || name.startsWith('TPH ')) {
    return {id: 'stairs', name: name.replace('TH-', '').replace('TPH-', '').replace('TH ', '').replace('TPH ', '')}
  } else if (name.startsWith('TF-') || name.startsWith('TF ')) {
    return {id: 'technic', name: name.replace('TF-', '').replace('TF ', '')}
  } else if (name === 'Außenvitrine') {
    return {id: null, name: name}
  } else {
    return {id: 'room', name: name}
  }
}