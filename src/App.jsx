import React, { useEffect, useState } from 'react'
import AppShell from './components/AppShell'
import Toast, { useToast } from './components/ui/Toast'
import LevelUpModal from './components/ui/LevelUpModal'
import { useStore } from './store/store'

function App() {
  const { toasts, showToast } = useToast()
  const xp = useStore((s) => s.xp)
  const level = useStore((s) => s.level)
  const addXP = useStore((s) => s.addXP)
  const checkStreak = useStore((s) => s.checkStreak)

  const [showLevelUp, setShowLevelUp] = useState(false)
  const [celebrateLevel, setCelebrateLevel] = useState(1)

  useEffect(() => {
    checkStreak()
  }, [checkStreak])

  const handleXPGain = (amount) => {
    const result = addXP(amount)
    showToast(amount)
    if (result.leveledUp) {
      setCelebrateLevel(result.newLevel)
      setShowLevelUp(true)
    }
  }

  return (
    <>
      <AppShell onXPGain={handleXPGain} />
      <Toast toasts={toasts} />
      <LevelUpModal
        level={celebrateLevel}
        isOpen={showLevelUp}
        onClose={() => setShowLevelUp(false)}
      />
    </>
  )
}

export default App
