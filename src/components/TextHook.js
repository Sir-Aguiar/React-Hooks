export default function HookingText({ textHooker, textHooked }) {
  return (
    <div id='textModel' className='children'>
      <input
        type='text'
        onChange={(e) => textHooker(e.target.value)}
      />
      <span>{textHooked}</span>
    </div>
  )
}