export default function SelectHook({ selectHooker, selectHooked }) {
  const frameworks = ["VueJS", "ReactJS", "React Native", "Angular", "jQuery"]
  const message = "Selecione um framework"
  return (
    <div className='children'>
      <select onChange={(e) => selectHooker(e.target.value)}>
        <option value=''>Escolha um framework</option>
        {
          frameworks.map((framework, index) => (
            <option key={index}>{framework}</option>
          ))
        }
      </select>
      <span>
        {
          selectHooked ? (selectHooked) : (message)
        }
      </span>
    </div>
  )
}