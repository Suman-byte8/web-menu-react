import { useState } from 'react'
import { Link, useParams } from 'react-router'
import {
  DishActionBar,
  DishHero,
  DishSummary,
  FavouriteButton,
  PhotoCredit,
  RelatedDishes,
} from '../components/dish/index.js'
import { ROUTES } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { getDish, getRelatedDishes } from '../lib/dishes.js'
import BackButton from '../shared/BackButton.jsx'
import Header from '../shared/Header.jsx'
import Logo from '../shared/Logo.jsx'
import PageLayout from '../shared/PageLayout.jsx'
import { EmptyState, InfoNote } from '../UI/index.js'

function DishNotFound() {
  useDocumentTitle('Dish not found — SILK INN Malda')

  return (
    <PageLayout
      withDock={false}
      header={
        <Header
          leading={<BackButton />}
          center={
            <Link to={ROUTES.home} aria-label="Silk Inn — home">
              <Logo className="h-11" />
            </Link>
          }
          trailing={<span className="size-11" />}
        />
      }
    >
      <EmptyState icon="restaurant_menu" title="Dish not found">
        This dish may have left the menu.{' '}
        <Link to={ROUTES.home} className="font-semibold text-honey underline underline-offset-2">
          Browse all menus
        </Link>
      </EmptyState>
    </PageLayout>
  )
}

/** Back and favourite buttons floating over the photo; they stay in reach while scrolling. */
function FloatingActions({ dish }) {
  return (
    <div className="pointer-events-none sticky top-0 z-40 h-0">
      <div className="app-container flex items-center justify-between pt-[max(env(safe-area-inset-top),0.875rem)] *:pointer-events-auto">
        <BackButton history to={dish.menu.route} label="Return to previous menu" />
        <FavouriteButton dishId={dish.id} dishName={dish.name} />
      </div>
    </div>
  )
}

function DishDetails({ dish }) {
  useDocumentTitle(`${dish.name} — SILK INN Malda`)
  const related = getRelatedDishes(dish, 6)
  const [choice, setChoice] = useState(0) // selected version, when there are several

  return (
    <PageLayout mainClassName="gap-8 pt-0 md:pt-[4.75rem]" header={<FloatingActions dish={dish} />}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <DishHero dish={dish} />

        <div className="relative z-10 -mt-16 flex flex-col gap-3.5 md:-mt-14 lg:mt-0">
          <DishSummary dish={dish} choice={choice} onChoose={setChoice} />

          <InfoNote icon="restaurant">
            Freshly prepared to order by the SILK INN culinary team. Please tell our staff about any allergies or
            dietary needs.
          </InfoNote>

          {dish.imageCredit && <PhotoCredit credit={dish.imageCredit} />}
        </div>
      </div>

      <RelatedDishes dishes={related} menu={dish.menu} />
      <DishActionBar dish={dish} choice={choice} />
    </PageLayout>
  )
}

function DishPage() {
  const { dishId } = useParams()
  const dish = getDish(dishId)

  // key: start fresh (photo, chosen version) when moving between dishes
  return dish ? <DishDetails key={dish.id} dish={dish} /> : <DishNotFound />
}

export default DishPage
