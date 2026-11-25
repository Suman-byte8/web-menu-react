import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { DishActionBar, DishHero, DishSummary, FavouriteButton, RelatedDishes } from '../components/dish/index.js'
import { ROUTES } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { getDish, getRelatedDishes } from '../lib/dishes.js'
import BackButton from '../shared/BackButton.jsx'
import Header from '../shared/Header.jsx'
import Logo from '../shared/Logo.jsx'
import PageLayout from '../shared/PageLayout.jsx'
import { EmptyState, InfoNote } from '../UI/index.js'

const homeLogo = (
  <Link to={ROUTES.home} aria-label="Silk Inn — home">
    <Logo className="h-11" />
  </Link>
)

function DishNotFound() {
  useDocumentTitle('Dish not found — SILK INN Malda')

  return (
    <PageLayout
      withDock={false}
      header={<Header leading={<BackButton />} center={homeLogo} trailing={<span className="size-11" />} />}
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

function DishDetails({ dish }) {
  useDocumentTitle(`${dish.name} — SILK INN Malda`)
  const related = getRelatedDishes(dish, 6)
  const [choice, setChoice] = useState(0) // selected version, when there are several

  return (
    <PageLayout
      mainClassName="gap-8 pt-0"
      header={
        <Header
          leading={<BackButton history to={dish.menu.route} label="Return to previous menu" />}
          center={homeLogo}
          trailing={<FavouriteButton dishId={dish.id} dishName={dish.name} />}
        />
      }
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-3.5">
        <DishHero dish={dish} />
        <DishSummary dish={dish} choice={choice} onChoose={setChoice} />
        <InfoNote icon="restaurant">
          Freshly prepared to order by the SILK INN culinary team. Please tell our staff about any allergies or
          dietary needs.
        </InfoNote>
      </div>

      <RelatedDishes dishes={related} menu={dish.menu} />
      <DishActionBar dish={dish} choice={choice} />
    </PageLayout>
  )
}

function DishPage() {
  const { dishId } = useParams()
  const dish = getDish(dishId)

  // key: start fresh (chosen version) when moving between dishes
  return dish ? <DishDetails key={dish.id} dish={dish} /> : <DishNotFound />
}

export default DishPage
