function changeTimeFromSecondToString(seconds) {
  seconds = Math.floor(seconds)
  const hour = Math.floor(seconds / 3600)
  const minute = Math.floor((seconds - hour * 3600) / 60)
  const second = seconds - hour * 3600 - minute * 60
  const changeHour = hour === 0 ? '' : hour < 10 ? `0${hour}:` : `${hour}:`
  const changeMinute = minute < 10 ? `0${minute}` : minute
  const changeSecond = second < 10 ? `0${second}` : second
  return `${changeHour}${changeMinute}:${changeSecond}`
}

function changeTimeFromSecondToDuration(seconds) {
  seconds = Math.floor(seconds)
  const hour = Math.floor(seconds / 3600)
  const minute = Math.floor((seconds - hour * 3600) / 60)
  const second = seconds - hour * 3600 - minute * 60
  const changeHour = hour === 0 ? '' : hour < 10 ? `0${hour} hr` : `${hour} hr`
  const changeMinute = minute < 10 ? `0${minute}` : minute
  const changeSecond = second < 10 ? `0${second}` : second
  return `${changeHour} ${changeMinute} min`
}

function changeScoreToRating(score) {
  score = parseFloat(score)
  if (score < 1) {
    return 0
  } else if (score >= 1 && score < 2) {
    return 0.5
  } else if (score >= 2 && score < 4) {
    return 1
  } else if (score >= 4 && score < 5) {
    return 1.5
  } else if (score >= 5 && score < 6) {
    return 2
  } else if (score >= 6 && score < 7) {
    return 2.5
  } else if (score >= 7 && score < 7.5) {
    return 3
  } else if (score >= 7.5 && score < 8) {
    return 3.5
  } else if (score >= 8 && score < 8.5) {
    return 4
  } else if (score >= 8.5 && score < 9.5) {
    return 4.5
  } else {
    return 5
  }
}

function calculateScore(views, likes, comments, publishedTime) {
  const BASIS_VIEW = 100000000
  const BASIS_LIKE = 10000000
  const BASE_COMMENT = 700000
  const BASE_PUBLISHED_TIME = new Date().toISOString().toString()

  let score = 5
  let viewScore = 0
  let likeScore = 0
  let commentScore = 0
  let timeScore = 0

  //Criterion views (50%)
  if (views >= BASIS_VIEW) {
    viewScore = 10
  } else {
    viewScore = 10 * (views / BASIS_VIEW)
  }

  //Criterion likes (25%)
  if (likes >= BASIS_LIKE) {
    likeScore = 10
  } else {
    likeScore = 10 * (likes / BASIS_LIKE)
  }

  //Criterion comments (15%)
  if (likes >= BASE_COMMENT) {
    commentScore = 10
  } else {
    commentScore = 10 * (likes / BASE_COMMENT)
  }

  //Criterion published time (10%)
  const year =
    new Date(BASE_PUBLISHED_TIME).getFullYear() -
    new Date(publishedTime).getFullYear()
  if (year <= 1) {
    timeScore = 10
  } else {
    timeScore = 10 - year > 5 ? 10 - year : 5
  }

  const scoreCriterion =
    viewScore * 0.6 + likeScore * 0.25 + commentScore * 0.15 + timeScore * 0.1
  score += 5 * (scoreCriterion / 10)
  return Math.round(score * 10) / 10
}

function getDataSearch(data, textSearch) {
  textSearch = textSearch.toLowerCase()
  return data.filter(
    (song) =>
      song.song.toLowerCase().includes(textSearch) ||
      song.name.filter((name) => name.toLowerCase().includes(textSearch))
        .length > 0 ||
      song.type.filter((type) => type.toLowerCase().includes(textSearch))
        .length > 0,
  )
}

export {
  changeTimeFromSecondToString,
  changeScoreToRating,
  changeTimeFromSecondToDuration,
  calculateScore,
  getDataSearch,
}
