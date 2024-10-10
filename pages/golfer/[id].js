import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import useGolferScores from '../../lib/useGolferScores'

const Home = () => {
  const router = useRouter()
  const golferId = router.query.id
  const { scores, error } = useGolferScores(golferId)

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <h1 className="text-lg">Scores for golfer {scores?.[0]?.user_name ?? 'unknown'}</h1>
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Home
