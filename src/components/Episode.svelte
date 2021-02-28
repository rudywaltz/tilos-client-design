<style>
  .episode {
    padding: 14px;
  }

  .episode:hover {
    background: rgba(86, 77, 74, 0.25);
  }

  .episode__title,
  .episode__diary {
    font-size: 15px;
    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    color: #F7E1D2;
  }

  .episode__date {
    color: #F7E1D2;
    display: block;
    font-size: 15px;
    margin-bottom: 5px;
  }

  .episode__duration {
    border: 1px solid #F7E1D2;
    border-radius: 15px;
    display: inline-block;
    font-size: 16px;;
    padding: 1px 10px;
  }

  .image {
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    flex-shrink: 0;
    height: 120px;
    margin: 12px;
    width: 120px;
  }

  .wrap {
    display: flex;
  }

  .content {
    flex-grow: 1;
  }
</style>

<script>
  import {
    format
  } from 'date-fns';
  import {
    formatDuration
  } from '../helpers/format-duration'
  export let name;
  export let alias;
  export let duration;
  export let title;
  export let realFrom;

  const formattedFrom = format(realFrom, 'yyyy-MM-dd');
</script>
<div class="episode">
  <div class="wrap">
    <div class="image" style="background-image: url('https://www.placecage.com/200/200');"></div>
    <div class="content">
      <h2 class="episode__title">{title}</h2>
      <h3 class="episode__diary">
        <a rel="prefetch" href="shows/{alias}">{name}</a>
      </h3>
      <time datetime="{formattedFrom}" class="episode__date">{formattedFrom}</time>
      <time class="episode__duration">{formatDuration(duration)}</time>
    </div>
  </div>
</div>
